const express = require('express');
const middleware = require('./middleware/middleware.js');
const awakeServer = require('./services/awake.js');
const apiRoutes = require('./routes/api-server.route.js');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

// Setup middleware
app.use(middleware);

// Initialize route paths
app.use('/', apiRoutes.testRoutes);

// Start the server
app.listen(process.env.PORT || 8080, () => console.log(`Server listening at port: ${process.env.PORT || 8080}`));