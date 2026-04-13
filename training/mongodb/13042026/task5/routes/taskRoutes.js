const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Only routing → no logic
router.post("/", taskController.createTask);
router.get("/", taskController.getAllTasks);
router.delete("/:id", taskController.deleteTask);
router.put("/status/:id", taskController.updateTaskStatus);
router.get("/employee/:id", taskController.getTasksByEmployee);

module.exports = router;