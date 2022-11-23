var express = require("express");
var router = express.Router();

var questions = require('./../controllers/trainerFunctionsController');


router.post('/create',questions.createQuestion);
router.post('/details/all',questions.getAllQuestions);
router.get('/details/:_id',questions.getSingleQuestion);
router.post('/delete',questions.deleteQuestion);



module.exports=router;

