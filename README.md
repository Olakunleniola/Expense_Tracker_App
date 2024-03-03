# Expense Tracker App
This Expense Tracker App was developed during a bootcamp at Codecademy. It employs the MVC (Model, View, Controller) architecture to demonstrate how this architectural pattern works in practice. The app allows users to track their expenses across different categories such as transport, housing, shopping, investment, etc. Users can create expenses with a title, amount in dollars, select a category, mark as essential, and specify a date.

## Features
+ **Expense Creation**: Users can create expenses by providing details such as title, amount, category, essential checkbox, and date.
- **Category Selection**: Users can select from various predefined categories like transport, housing, shopping, investment, etc.
+ **Edit and Delete Expenses**: Users can edit the title of expenses or delete them altogether.
- **Date Selection**: Users can select any date to view their expenses.
+ **Visualization**: The app provides a beautiful pie chart and a list of expenses for the selected date, allowing users to visualize their spending patterns.
- **UI**: The front-end of the app is built with React and utilizes @mui/material for most of its UI components, ensuring a modern and responsive user interface.

## Architecture
+ **Model (Backend)**: The backend of the app uses a PostgreSQL database. Configuration details for the database are stored in a .env file. Users downloading the app will need to set up their own database configuration.
- **View (Frontend): The front end of the app is built with React, a popular JavaScript library for building user interfaces. It provides a user-friendly interface for users to interact with the app.
+ **Controller (Middleware)**: The controller consists of JavaScript files containing functions that make requests to the database and are used as middleware in the Express.js route configuration. Express.js is used for routing and handling application endpoint requests.

## Installation
+ Clone the repository from GitHub.
    ```bash
        git clone https://github.com/Olakunleniola/Expense_Tracker_App.git
    ```
- Navigate to the project directory.
+ Install dependencies using npm install.
- Set up PostgreSQL database configuration in the .env file.
+ Run the backend server using `npm start` in the root folder. The backend server will start listening on a set port in the .env file or port 8000 by default.
- Start the frontend server by navigating to the views folder and `run npm start`.


## Technologies Used
+ React
- Material-UI (@mui/material)
+ Express.js
- PostgreSQL
+ Node.js

## Contributors
This Expense Tracker App frontend was partially developed by Codecademy but the app was made functional by Adio Olakunle

## License
This project is licensed under the MIT License.





