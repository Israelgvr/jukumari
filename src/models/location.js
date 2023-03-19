const mongoose = require("mongoose");
const {Schema} = mongoose
const schema = new Schema({
    userId:{ type:String },
    longitude: {
        type: Number,
        required: true
      },
      latitude: {
        type: Number,
        required: true
      }
    
      
});
 const model = mongoose.model('locations',schema);
 module.exports = model;