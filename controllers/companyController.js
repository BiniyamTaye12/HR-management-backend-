const Company = require("../models/companyModel");

exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ message: "Company not found" });
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.json({ message: "Company deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
