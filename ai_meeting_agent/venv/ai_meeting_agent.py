import time
import schedule
import webbrowser
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import random
import pyautogui  # Import pyautogui for GUI automation

# Function to join the meeting
def join_meeting(meeting_url):
    # Set up Chrome options
    chrome_options = Options()
    chrome_options.add_argument("user-data-dir=/Users/yadinsoffer/Library/Application Support/Google/Chrome")  # User data directory
    chrome_options.add_argument("profile-directory=Profile 2")  # Use the correct profile
    chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36")
    chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
    chrome_options.add_experimental_option("useAutomationExtension", False)

    # Specify the path to the downloaded ChromeDriver
    chrome_driver_path = '/Users/yadinsoffer/Downloads/chromedriver-mac-arm64/chromedriver'  # Update this path
    
    # Initialize the Chrome driver
    service = Service(executable_path=chrome_driver_path)
    driver = webdriver.Chrome(service=service, options=chrome_options)

    # Open the meeting URL
    driver.get(meeting_url)

    # Wait for the page to load
    time.sleep(random.uniform(2, 5))  # Sleep for a random time between 2 and 5 seconds

    # Check if the meeting URL is for Google Meet or Zoom
    if "meet.google.com" in meeting_url:
        # Logic for Google Meet
        try:
            # Click the "Join now" button (adjust the selector as needed)
            join_button = driver.find_element(By.XPATH, "//button[contains(text(), 'Join now')]")
            join_button.click()
        except Exception as e:
            print("Error joining the Google Meet:", e)
    elif "zoom.us" in meeting_url:
        # Logic for Zoom
        print("If prompted, please allow the browser to open the Zoom application.")
        
        # Wait for the Zoom application to open
        time.sleep(5)  # Adjust this time as needed to ensure the Zoom app is open

        # Enter the name in the Zoom application
        pyautogui.typewrite("Ivvy")  # Replace with the desired name
        time.sleep(1)  # Wait a moment for the text to be entered

        # Click the "Join" button
        pyautogui.press('enter')  # Press Enter to click the "Join" button

    # Keep the browser open for a while to allow user interaction
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
    meeting_link = "https://us06web.zoom.us/j/89282478066?pwd=Y4aaUnXGOUuBpRYbKIUROnl9Vtklq2.1"  # Example Zoom meeting link
    meeting_time = "15:32"  # Example meeting time in HH:MM format (24-hour clock)

    # Schedule the meeting
    schedule_meeting(meeting_link, meeting_time)
