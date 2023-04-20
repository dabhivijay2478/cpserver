const mongoose = require("mongoose");
const addclubchema = new mongoose.Schema({
  ClubName: {
    type: String,
    required: true,
  },
  Factulty: {
    type: String,
    required: true,
  },

  Student: {
    type: String,
    required: true,
  },
  Dates: {
    type: Object,
    required: true,
  },
});
const addclub = mongoose.model("addclub", addclubchema);
module.exports = addclub;
