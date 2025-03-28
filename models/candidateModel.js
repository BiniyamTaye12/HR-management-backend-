const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  skills: [{ type: String }], // Array of skills
  experienceYears: { type: Number, required: true },
  appliedFor: { type: mongoose.Schema.Types.ObjectId, ref: "Department" }, // Relation to Department
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Candidate", candidateSchema);
