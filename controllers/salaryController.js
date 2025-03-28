const Salary = require("../models/salaryModel");

exports.getSalaries = async (req, res) => {
  try {
    const salaries = await Salary.find().populate("employee");
    res.json(salaries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSalaryById = async (req, res) => {
  try {
    const salary = await Salary.findById(req.params.id).populate("employee");
    if (!salary) return res.status(404).json({ message: "Salary record not found" });
    res.json(salary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addSalary = async (req, res) => {
  try {
    const salary = new Salary(req.body);
    await salary.save();
    res.status(201).json(salary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateSalary = async (req, res) => {
  try {
    const updatedSalary = await Salary.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSalary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteSalary = async (req, res) => {
  try {
    await Salary.findByIdAndDelete(req.params.id);
    res.json({ message: "Salary record deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
