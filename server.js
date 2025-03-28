const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/candidates", require("./routes/candidateRoutes"));
app.use("/api/companies", require("./routes/companyRoutes"));
app.use("/api/employees", require("./routes/employeeRoutes"));
app.use("/api/departments", require("./routes/departmentRoutes"));
app.use("/api/salaries", require("./routes/salaryRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
