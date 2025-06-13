# Import hbdc py
import datetime  # import datetime module

print("Hello dear sir.")  # create a hello sir prompt

# create a special note
print("""NOTE:   
--> Here you can view any year date between 1700 to 2050,
--> so you must enter between 1700 to 2050.
--> Have a nice day sir, thank you! :)""")
first_name = input("* Enter your first name: ").capitalize()  # create a variable for first name
last_name = input("* Enter your last name: ").capitalize()  # create a variable for last name


# create a birthdate function
def birth_date(year, month, day):
    days = datetime.date(year, month, day)
    return days.strftime("%A")


# create a while loop
while True:
    # create a try block method for test a block of code for errors
    try:
        # create a year variable for user's birth year input
        year = int(input(f"* Enter your birth year MR.{first_name} {last_name}: "))
        if year < 1700 or year > 2050:
            print("Please enter a year between 1700 and 2050.")
            continue
        # create a month variable for user's birth month input
        month = int(input(f"* Enter your birth month MR.{first_name} {last_name}: "))
        if month < 1 or month > 12:
            print("Please enter a valid month (1-12).")
            continue
        # create a day variable for user's birth_day input
        day = int(input(f"* Enter your birth day MR.{first_name} {last_name}: "))
        if day < 1 or day > 31:
            print("Please enter a valid day (1-31).")
            continue
        # create a day of the week variable for determine birthdate
        day_of_the_week = birth_date(year, month, day)
        print(
            f"Hay MR.{first_name} {last_name} you were born on '{day_of_the_week}', of the '{month}th' month of {year}. :)")
        break
    # now try block method's key is except for any kind of error's in here the error's key is ValueError
    except ValueError:
        print("Invalid input, please enter a number.")

    except:
        print("Invalid date, please enter a valid date.")
