const is = require('is_js');
const log = require('debug')('resume-api:server');
const logError = require('debug')('resume-api:error');
const httpStatus = require('http-status-codes');
const Resume = require('../models/resume');

module.exports.getResume = (req, res, next) => {

  return Resume.findOne()
    .then(result => {
      return is.existy(result) ? 
        res.json(result) :
        res.status(httpStatus.NOT_FOUND).send({ message: 'Resume not found'});
    })
    .catch(err => {
      logError(err);
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });

};
