# abductor-virgin-sickle

Code Name: Abductor Virgin Sickle
---------------------------------
Title: Snackr-Trackr
--------------------

Description:
------------

    A web based UI that allows a user to create a profile and store a list of food items that they have eaten throughout the work day.

    The snack database will have a growing list of items and their basic nutritional information like, calories, carbs, and sugar.

    To avoid inaccurate data, creating entries for the DB will be an Admin privilege.

Starting with the Front End
---------------------------

Making an Angular based front end.
    
    List can be sorted by day.
        "What did I have yesterday?"
        Default is today
        Select day
        Select date range
    
    User will have a count per snack.
        "How many of these have I had?"
        Default is today
        Select day
        Select date range
    
Pages:
------

    Show today's snacks
        Table view
            Column names: name, calories, carbs, sugar, today's count
    Add snack
        Form
            Search bar to search for items available in the DB

    Snack history
        Table view
            Column names: name, total count for all time or selected date range, total calories, total carbs, total sugar


    Create snack - admin
        Form
            Fields
                name, calories, carbs, sugar
    Login
        Register
        Login

    User Profile
        Edit name, user name, password, dark mode
