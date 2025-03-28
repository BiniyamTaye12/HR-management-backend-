const Department = require("../models/departmentModel");

exports.getDepartments = async (req, res) => {
  try {
    const departments = await Department.find().populate("company");
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id).populate("company");
    if (!department) return res.status(404).json({ message: "Department not found" });
    res.json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addDepartment = async (req, res) => {
  try {
    const department = new Department(req.body);
    await department.save();
    res.status(201).json(department);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateDepartment = async (req, res) => {
  try {
    const updatedDepartment = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDepartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteDepartment = async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);
    res.json({ message: "Department deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
