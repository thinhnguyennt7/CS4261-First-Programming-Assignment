const firebase = require('firebase');
const dotenv = require('dotenv');
dotenv.config();

// Initialize firebase database config
firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID
});

module.exports = firebase.database();