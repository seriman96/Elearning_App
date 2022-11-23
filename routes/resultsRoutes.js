var express = require("express");
var router = express.Router();

var results = require('./../controllers/generateResultsController');
router.post('/results',results.generateResults);
module.exports = router;