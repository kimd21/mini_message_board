var express = require('express');
var router = express.Router();

const title = 'Mini Messageboard';

const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title, messages });
});

/* GET form listing. */
router.get('/new', function(req, res, next) {
  res.render('form', {title});
});

router.post('/new', function(req, res, next) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  // Create new date object
  messages.push({text: messageText, user: messageUser, added: new Date()})
  res.redirect('/');
});

module.exports = router;
