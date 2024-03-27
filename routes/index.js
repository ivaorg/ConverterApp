var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Inch to Centimeter Converter" });
});

router.post('/convert', function(req, res, next) {
  var inches = parseFloat(req.body.inches);
  var cm = inches * 2.54;
  res.render('index', { title: 'Inch to Centimeter Converter', result: `${inches} inches is equal to ${cm.toFixed(2)} centimeters.` });
});


module.exports = router;
