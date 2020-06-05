/*
Author: Nishant Kumar
Description: This file is used to handle the server and the data stored in the MongoDB using mongoose. Morgan is a HTTP requesr
             logger middleware used for the process of logging requests to the app.
Note: To run the application type "npm run both" in the terminal, it will run both the commands of front and backend.
*/

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/marks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT,console.log(`Server is  starting at ${PORT}`));