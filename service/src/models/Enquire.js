// create Enquire model for mongoose
const mongoose = require("mongoose");
const EnquireSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  placeName: {
    type: String,
    required: false,
  },
  reffer: {
    type: String,
    required: true,
  },
  placeId: {
    type: String,
    required: false,
  },
});

const Enquire = mongoose.model("Enquire", EnquireSchema);
module.exports = Enquire;
