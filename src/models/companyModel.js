const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: String,
  contactNumber: String,
  contactPerson: String,
  address: String,
  location: String,
  status: String,
  callStatus: { type: String, enum: ["Pending", "Done"] },
  date: Date,
  remarks: String,
  cameraFile: String, 
  voiceNote: String,  
  voiceText: String,
}, { timestamps: true });

module.exports = mongoose.model("Company", companySchema);
