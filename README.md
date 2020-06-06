# Student-Graph-Project
A MERN application in which a student enters his/her marks and show the same in the form of a bar chart.

Files that I have created/edited:
#Front-end:
1. client -> src -> App.js
2. client -> src -> components -> BarChartComponent.js
3. client -> public -> index.html (For Bootstrap)

#Back-end:
1. server.js
2. models -> blogpost.js
3. routes -> api.js

Working:
A form has been created in React.js in which when a person enters his/her marks in various subjects, they are displayed in the form of a
Bar Chart. The chart has been taken from library "react-chartjs-2". The data is being stored in the server and also in MongoDb(local).
Then the data is being extracted through axios and is being fetched to the bar chart.

To run this app, simply type "npm run both" without quotation marks in the terminal.
