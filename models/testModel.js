var mongoose = require("mongoose");
var Test = new mongoose.Schema({
        
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });
const TestModel = mongoose.model('TestModel', Test);
module.exports = TestModel;
 