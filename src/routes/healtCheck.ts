import express from 'express';
const path = require('path');

const mongoose = require('mongoose');
export const healthCheck = express.Router()

healthCheck.get('/ping', async (req, res, next) => {
    try {
        switch (mongoose.connection.readyState) {
            case 0:
                res.status(400).json({
                    service: 'node-api',
                    status: 'BAD',
                    msg: 'connection not established'
                })
            case 1:
                res.status(200).json({
                    service: 'node-api',
                    status: 'GOOD',
                    msg: 'connection established'
                })

        }
    } catch(error) {
        next(error)
    }
});

healthCheck.get('/file', async (req, res, next) => {
    try {
       
        let filePath = '/home/fishwithcape/code/node-api/test.json'
        res.sendFile(filePath, (err) => {
            if (!err) {
                console.log(`Sent file: ${filePath}`);
            } else {
                console.log(err)
                console.log(`Failed to send: ${filePath}`);
            }
        })
    } catch (err) {
        next(err)
    }
})