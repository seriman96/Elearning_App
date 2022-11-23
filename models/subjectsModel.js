var mongoose = require("mongoose");
const UserModel = require('./userModel');

var subjectschema = new mongoose.Schema({
    topic : {
        required : true,
        type : String
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status:{
        type: Boolean,
        default : 1,
        required : true
    }
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }

);

const SubjectModel = mongoose.model('SubjectModel', subjectschema);
module.exports = SubjectModel;
