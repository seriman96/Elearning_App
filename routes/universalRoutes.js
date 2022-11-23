var express = require("express");
var router = express.Router();

var universal = require('./../controllers/universalsubjectFunctionsController');

router.post('/create',universal.createEditsubject);
router.get('/details/all',universal.getAllSubjects);
router.get('/details/:_id',universal.getSingleSubject);




module.exports=router;
