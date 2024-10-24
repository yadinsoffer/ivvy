import os
import base64
import json
import re
from flask import Flask, jsonify
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from flask_socketio import SocketIO
from flask_cors import CORS

# If modifying these SCOPES, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
socketio = SocketIO(app)

def authenticate_gmail():
    print("Authenticating Gmail...")
    """Authenticate and return the Gmail service."""
    creds = None
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
        print("Using existing credentials.")
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
            print("Credentials refreshed.")
        else:
            print("No valid credentials found. Starting authentication flow.")
            flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
            print("Flow created, running local server for authentication...")
            creds = flow.run_local_server(port=61372)  # Change to the authorized port
            print("Authentication successful.")
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
            print("Credentials saved to token.json.")
    return build('gmail', 'v1', credentials=creds)

def extract_meeting_details(message):
    """Extract meeting details from the email message."""
    details = {}
    payload = message['payload']
    headers = payload['headers']

    # Extract subject (Title)
    for header in headers:
        if header['name'] == 'Subject':
            details['title'] = header['value']

    # Extract date from headers
    for header in headers:
        if header['name'] == 'Date':
            details['date'] = header['value']  # This will be in RFC 2822 format

    # Extract sender (From)
    for header in headers:
        if header['name'] == 'From':
            details['from'] = header['value']  # Capture the sender's email

    # Extract attendees
    attendees = []
    if 'To' in headers:
        attendees.extend(headers['To'].split(','))
    if 'Cc' in headers:
        attendees.extend(headers['Cc'].split(','))
    details['attendees'] = [attendee.strip() for attendee in attendees]

    # Extract meeting link and time from the body
    if 'body' in payload and 'data' in payload['body']:
        body = base64.urlsafe_b64decode(payload['body']['data']).decode('utf-8')

        # Extract meeting link (if exists)
        meeting_link = re.search(r'(https?://[^\s]+)', body)
        if meeting_link:
            details['link'] = meeting_link.group(0)

        # Extract time (if exists)
        time_match = re.search(r'(\d{1,2}:\d{2} ?[APMapm]{2})', body)
        if time_match:
            details['time'] = time_match.group(0)

    return details

@app.route('/api/meetings', methods=['GET'])
def get_meetings():
    """Fetch and return meeting details."""
    service = authenticate_gmail()
    
    # Query for calendar invitations
    query = 'subject:"Invitation" OR from:calendar@google.com'
    results = service.users().messages().list(userId='me', q=query).execute()
    messages = results.get('messages', [])

    meeting_details = []
    for message in messages:
        msg = service.users().messages().get(userId='me', id=message['id']).execute()
        details = extract_meeting_details(msg)
        if details:  # Only append if details are found
            meeting_details.append(details)

    return jsonify(meeting_details)

print("Starting email monitor...")
authenticate_gmail()  # Call the function here
print("Gmail authentication complete.")

if __name__ == '__main__':
    socketio.run(app, port=61372)
