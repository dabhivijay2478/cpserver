const mongoose = require("mongoose");
const addcertificateschema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  certificates: {
    type: Array,
  },
});
const addcertificate = mongoose.model("addcertificate", addcertificateschema);
module.exports = addcertificate;
