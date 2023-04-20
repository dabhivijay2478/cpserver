const mongoose = require("mongoose");
const registereventschema = new mongoose.Schema({
  EventName: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  EnrollmentNo: {
    type: Number,
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
const registerevent = mongoose.model("registerevent", registereventschema);
module.exports = registerevent;
