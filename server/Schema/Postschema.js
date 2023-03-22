const mongoose = require("mongoose");
const addsStudent = new mongoose.Schema({
  firstname  : {
    type: String,
    trim: true,
  },
  lastname : {
    type: String,
    trim: true,
  },
  country : {
    type: String,
    trim: true,
  },
  city : {
    type: String,
    trim: true,
  },
  Nationality : {
    type: String,
    trim: true,
  },
  state : {
    type: String,
    trim: true,
  },
});
const mongomodal=mongoose.model("saveStd", addsStudent);
module.exports = mongomodal;
