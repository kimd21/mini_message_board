var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('form', 'respond with a resource');
});

module.exports = router;
