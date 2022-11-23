var mongoose = require("mongoose");
var answersheetschema = new mongoose.Schema({
    startTime : {
        type : Number,
        required : true
    },
    testid :{ 
        type: mongoose.Schema.Types.ObjectId,
        ref : 'TestPaperModel', 
        required : true
    },
    userid : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'TraineeEnterModel',
        required : true
    },
    questions : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref :  'QuestionModel',
            required : true
        }
    ],
    answers : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Answers',
            required : true
        }
    ],
    completed :{
        type : Boolean,
        default : false,
        required : true
    }
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });

const Answersheet = mongoose.model('Answersheet', answersheetschema);
module.exports = Answersheet;