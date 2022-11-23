var mongoose = require("mongoose");
var answerSchema = new mongoose.Schema({
    
        questionid : {
            type : String,
            required : true
        },
        chosenOption : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'options',
                required : false
            }
           
        ],
        userid:{
            type : mongoose.Schema.Types.ObjectId, 
            ref : 'TraineeEnterModel',
            required : false
        }
    
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });
const Answers = mongoose.model('Answers', answerSchema);
module.exports = Answers;

 