'use strict';

module.exports = (req, res, next) => {
  if (!req.query.name) {
    next('validator error');
  } else {
    console.log('__REQ QUERY__: ', req.query);
    next();
  }
};
