import express from 'express';
import { healthCheck } from './src/routes/healtCheck'
require('dotenv/config')


export const app = express();
// mongo connection string
// make a config file for this later - Max
const connectionStr = 'mongodb+srv://fishwithcape:mrzptt4kj@fishwithcape.hmq6l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// instantiate date obj and create timestamp
const date = new Date();
let timeStamp = date.getUTCDate()

// Add middleware here in future commits boi
app.use(express.json());
app.use('/health', healthCheck)

// mongoDB connection for healthcheck and storage.
const mongoose = require('mongoose');

console.log(`[${timeStamp}]-- Connescting to DB`);

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then( async () => {
    const db = mongoose.connection;
    app.listen(3000, () => {
        console.log(`[${timeStamp}]-- Connected to ${db}`);
    })
})