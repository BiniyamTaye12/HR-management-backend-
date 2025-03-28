const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  manager: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // Department Manager
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }], // Employees in department
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Department", departmentSchema);
