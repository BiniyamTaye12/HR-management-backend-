const express = require("express");
const { getSalaries, getSalaryById, addSalary, updateSalary, deleteSalary } = require("../controllers/salaryController");

const router = express.Router();

router.get("/", getSalaries);
router.get("/:id", getSalaryById);
router.post("/", addSalary);
router.put("/:id", updateSalary);
router.delete("/:id", deleteSalary);

module.exports = router;
