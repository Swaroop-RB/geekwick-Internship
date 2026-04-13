const express = require("express");
const app = express();

app.use(express.json());

// ROUTES
const internRoutes = require("./routes/internRoutes");
const taskRoutes = require("./routes/taskRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

// REGISTER ROUTES
app.use("/api/interns", internRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/employees", employeeRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
    res.send("API Working");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});