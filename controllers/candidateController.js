const Candidate = require("../models/candidateModel");

exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCandidateById = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) return res.status(404).json({ message: "Candidate not found" });
    res.json(candidate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addCandidate = async (req, res) => {
  try {
    const candidate = new Candidate(req.body);
    await candidate.save();
    res.status(201).json(candidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCandidate = async (req, res) => {
  try {
    const updatedCandidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCandidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCandidate = async (req, res) => {
  try {
    await Candidate.findByIdAndDelete(req.params.id);
    res.json({ message: "Candidate deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
