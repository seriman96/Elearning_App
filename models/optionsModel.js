var mongoose = require("mongoose");

var optionschema = new mongoose.Schema({
    optbody : {
        required : false,
        type : String 
    },
    optimg: {
        type : String,
        required : false,
        default : null
    },
    isAnswer:{
        type : Boolean,
        required : true,
        default : false
    }
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  })

const Options = mongoose.model('Options', optionschema);
module.exports = Options;