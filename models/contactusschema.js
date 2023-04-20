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

  ClubName: {
    type: String,
    required: true,
  },
  Subject: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
});
const adduser = mongoose.model("contact", adduserchema);
module.exports = adduser;
