var express = require('express');
var router = express.Router();
var feed = require('../lib/feed');
var createError = require('http-errors');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(res.locals.name);
  res.render('index', { posts: feed.posts() });
});

router.post('/', async function(req, res, next) {
  // req
  console.log(req.body);
  const header = req.body.header;
  const content = req.body.content;
  await feed.addPost(header, content);
  res.render('index', { posts: feed.posts() });
});

module.exports = router;
