const mongoose = require("mongoose");
const addeventschema = new mongoose.Schema({
  ClubName: {
    type: String,
    required: true,
  },
  EventName: {
    type: String,
    required: true,
  },
  HandlerName: {
    type: String,
    required: true,
  },

  Descrption: {
    type: String,
    required: true,
  },
  Venue: {
    type: String,
    required: true,
  },
  Certifiacate: {
    type: String,
    required: true,
  },
  Dates: {
    type: Object,
    required: true,
  },
});
const addevent = mongoose.model("addevent", addeventschema);
module.exports = addevent;
