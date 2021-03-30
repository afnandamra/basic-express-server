'use strict';

module.exports = (req, res, next) => {
  if (!req.query.name) {
    throw new Error('Validator Error');
    // next('validator error');
  } else {
    console.log('__REQ QUERY__: ', req.query);
    next();
  }
};
