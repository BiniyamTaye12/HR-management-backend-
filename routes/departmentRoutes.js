const express = require("express");
const { getDepartments, getDepartmentById, addDepartment, updateDepartment, deleteDepartment } = require("../controllers/departmentController");

const router = express.Router();

router.get("/", getDepartments);
router.get("/:id", getDepartmentById);
router.post("/", addDepartment);
router.put("/:id", updateDepartment);
router.delete("/:id", deleteDepartment);

module.exports = router;
