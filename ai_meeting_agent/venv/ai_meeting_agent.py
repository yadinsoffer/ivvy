import time
import schedule
import webbrowser
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

# Function to join the meeting
def join_meeting(meeting_url):
    # Set up Chrome options
    chrome_options = Options()
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    
    # Specify the path to the ChromeDriver
    service = Service('/Users/yadinsoffer/Downloads/chromedriver_mac_arm64')  # Replace with your ChromeDriver path
    driver = webdriver.Chrome(service=service, options=chrome_options)

    # Open the meeting URL
    driver.get(meeting_url)

    # Wait for the page to load
    time.sleep(5)  # Adjust this as needed

    # Add logic to handle the meeting interface (e.g., clicking buttons)
    # Example for Google Meet:
    try:
        # Click the "Join now" button (adjust the selector as needed)
        join_button = driver.find_element(By.XPATH, "//button[contains(text(), 'Join now')]")
        join_button.click()
    except Exception as e:
        print("Error joining the meeting:", e)

    # Keep the browser open for the duration of the meeting
    print("Joined the meeting. Press Ctrl+C to exit.")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("Exiting the meeting.")
        driver.quit()

# Function to schedule the meeting
def schedule_meeting(meeting_url, meeting_time):
    # Schedule the meeting
    schedule.every().day.at(meeting_time).do(join_meeting, meeting_url)

    print(f"Scheduled meeting at {meeting_time}. Waiting to join...")
    while True:
        schedule.run_pending()
        time.sleep(1)

# Example usage
if __name__ == "__main__":
    # Replace with your actual meeting link and time
    meeting_link = "https://meet.google.com/abc-defg-hij"  # Example meeting link
    meeting_time = "14:30"  # Example meeting time in HH:MM format (24-hour clock)

    # Schedule the meeting
    schedule_meeting(meeting_link, meeting_time)

