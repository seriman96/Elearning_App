var express = require("express");
var router = express.Router();

var dummy = require('./../controllers/dummyController');
router.post('/domain', dummy.getdomain);
module.exports = router;