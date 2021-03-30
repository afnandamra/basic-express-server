'use strict';

// Dependincies
const express = require('express');
const app = express();

// Middlewares
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

// Error handlers
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

// Parsing json
app.use(express.json());

// Global middleware
app.use(logger);

// Routes definitions
app.get('/', homeHandler);
app.get('/person', validator, personHandler);

// Routes functions
function homeHandler(req, res) {
  res.send('Home Page');
}

function personHandler(req, res) {
  res.json({ name: req.query.name });
}

// Error handlers
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT}/`);
    });
  },
};
