var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
  res.json({ a: 1, b: 2, c: 3 });
});

module.exports = router;
