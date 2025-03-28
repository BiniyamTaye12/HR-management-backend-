const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // Link to Employee
  amount: { type: Number, required: true },
  currency: { type: String, default: "ETB" },
  payDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Salary", salarySchema);
