const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: mongoose.Schema.Types.ObjectId, ref: "Salary" }, // Relation to Salary
  department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" }, // Relation to Department
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" }, // Relation to Company
  hireDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Employee", employeeSchema);
