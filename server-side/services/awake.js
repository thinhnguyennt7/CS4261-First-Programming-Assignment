const { HTTP } = require('http-call');
const dotenv = require('dotenv');
dotenv.config();

setInterval(async () => {
    await HTTP.get(process.env.HOST + '/v1/awake');
}, 1740000);