const mongoose = require("mongoose");
const adduserchema = new mongoose.Schema({
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

  Role: {
    type: String,
    required: true,
  },
});
const adduser = mongoose.model("users", adduserchema);
module.exports = adduser;
