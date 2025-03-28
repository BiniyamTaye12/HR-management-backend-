const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  industry: { type: String, required: true },
  foundedYear: { type: Number, required: true },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }], // Relation to Employees
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Company", companySchema);
