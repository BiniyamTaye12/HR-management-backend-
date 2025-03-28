const express = require("express");
const { getCandidates, getCandidateById, addCandidate, updateCandidate, deleteCandidate } = require("../controllers/candidateController");

const router = express.Router();

router.get("/", getCandidates);
router.get("/:id", getCandidateById);
router.post("/", addCandidate);
router.put("/:id", updateCandidate);
router.delete("/:id", deleteCandidate);

module.exports = router;
