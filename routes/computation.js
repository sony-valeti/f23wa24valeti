var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const x = req.query.x ? parseFloat(req.query.x) : Math.random(); // Use query value or generate a random value

  // Calculate the result using Math.exp()
  const result = Math.hypot(x);

  // Prepare the response string
  const responseString = `${Math.hypot.name} applied to ${x} is ${result}`;

  res.send(responseString);
});

module.exports = router;
