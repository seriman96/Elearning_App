var mongoose = require("mongoose");
var traineeschema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email:{
        type : String,
        required: true

    },
    contact : {
        type : Number,
        required : true

    },
    organisation : {
        type : String,
        required : true
    },
    testid : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TestPaperModel',
        required : true
    },
    location : {
        type : String,
        required : true
    }
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }

);

const TraineeEnterModel = mongoose.model('TraineeEnterModel', traineeschema);
module.exports = TraineeEnterModel;