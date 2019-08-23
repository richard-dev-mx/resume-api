/**
 * 
 * Created by Ricardo Jiménez Hernández
 * 12/08/19.
 */

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');

const root = require('./routes/index');
const resume = require('./routes/resume');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({
  origin: process.env.APP_URL
}));

app.use('/', root);
app.use('/resume', resume);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).end();
});

module.exports = app;
