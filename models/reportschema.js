const mongoose = require("mongoose");

const reportschema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },

  Password: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  PhoneNO: {
    type: Number,
    required: true,
  },
  Class: {
    type: String,
    required: true,
  },
  Batch: {
    type: String,
    required: true,
  },
  ClubName: {
    type: String,
    required: true,
  },
  FavTech: {
    type: String,
    required: true,
  },
});
const report = mongoose.model("addclubs", reportschema);
module.exports = report;
