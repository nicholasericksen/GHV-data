var express = require('express');
var twig = require('twig');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/habitat', function(req, res, next) {
  res.render('habitat', { title: 'Express' });
});

router.get('/climate', function(req, res, next) {
  res.render('climate', { title: 'Express' });
});

router.get('/water', function(req, res, next) {
  res.render('water', { title: 'Express' });
});

router.get('/hrecos', function(req, res, next) {
  res.render('hrecos', { title: 'Express' });
});

module.exports = router;
