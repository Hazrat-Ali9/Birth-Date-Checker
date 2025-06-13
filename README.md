# Historical Birth Date Checker/Birth Date Finder
This Python script prompts the user for their first and last name, as well as their birth year, month, and day, and then returns the day of the week they were born.
The script includes input validation to ensure that the date entered is within a specific range and is valid.

Features:
  > Prompts the user for their first and last name.
  > Accepts and validates the user's birth date within the range of 1700 to 2050.
  > Displays the day of the week corresponding to the entered birth date.
  > Provides error handling for invalid inputs.

How to Use:
  1. Run the Script: Execute the script using a Python interpreter.
  2. Enter Your Details: Follow the prompts to enter your first name, last name, birth year, month, and day.
  3. View the Result: The script will display the day of the week you were born.

# Code Explanation:
import datetime  # Import datetime module

print("Hello dear sir.")  # Create a hello sir prompt

# Create a special note
print("""NOTE:   
--> Here you can view any year date between 1700 to 2050,
--> so you must enter between 1700 to 2050.
--> Have a nice day sir, thank you! :)"""
first_name = input("* Enter your first name: ").capitalize()  # Create a variable for first name
last_name = input("* Enter your last name: ").capitalize()  # Create a variable for last name

# Create a birthdate function
def birth_date(year, month, day):
    days = datetime.date(year, month, day)
    return days.strftime("%A")

# Create a while loop
while True:
    # Create a try block method to test a block of code for errors
    try:
        # Create a year variable for user's birth year input
        year = int(input(f"* Enter your birth year MR.{first_name} {last_name}: "))
        if year < 1700 or year > 2050:
            print("Please enter a year between 1700 and 2050.")
            continue
        # Create a month variable for user's birth month input
        month = int(input(f"* Enter your birth month MR.{first_name} {last_name}: "))
        if month < 1 or month > 12:
            print("Please enter a valid month (1-12).")
            continue
        # Create a day variable for user's birth day input
        day = int(input(f"* Enter your birth day MR.{first_name} {last_name}: "))
        if day < 1 or day > 31:
            print("Please enter a valid day (1-31).")
            continue
        # Create a day of the week variable to determine birthdate
        day_of_the_week = birth_date(year, month, day)
        print(f"Hay MR.{first_name} {last_name} you were born on '{day_of_the_week}', of the '{month}th' month of {year}. :)"
        break
    # Handle invalid inputs
    except ValueError:
        print("Invalid input, please enter a number.")
    except:
        print("Invalid date, please enter a valid date.")

Requirements
  > Python 3.x

Notes
  > Ensure the inputs are within the specified range (1700 to 2050) for the year, and valid ranges for the month (1-12) and day (1-31).
  > The script handles common input errors and prompts the user to re-enter the information if needed.

## Historical Birth Date Checker web app 
This web application allows users to determine the day of the week they were born on by entering their birth date. Initially developed in Python, this functionality has been converted into JavaScript for a web-based implementation.

- [see live]()

Author: [Hazrat Ali]()

Owner: [Hazrat Ali]()

