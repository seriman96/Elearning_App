var mongoose = require("mongoose");

var traineetestschema = new mongoose.Schema({
    
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }

);

const TraineeTestsModel = mongoose.model('TraineeTestsModel', traineetestschema);
module.exports = TraineeTestsModel;