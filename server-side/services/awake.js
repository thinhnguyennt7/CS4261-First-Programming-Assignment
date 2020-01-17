const { HTTP } = require('http-call');
const dotenv = require('dotenv');
dotenv.config();

setInterval(async () => {
    // await HTTP.get(process.env.HOST + '/awake');
    console.log('Waking up the server');
}, 1740000);