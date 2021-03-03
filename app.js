const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')

const app = express();


// MiddleWare go here pls
app.listen(3000, (err) => {
    if (!err) {
        console.log('Listening on 3000')
    } else if (err) {
        console.log('Error');
    }
});


//mongodb connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) {
        console.log('Connected to Database')
    } else {
        return mongoose.Error
    };
});


