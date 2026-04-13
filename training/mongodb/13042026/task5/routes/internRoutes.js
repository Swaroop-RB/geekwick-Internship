const express = require("express");
const router = express.Router();
const internController = require("../controllers/internController");

//  SPECIFIC ROUTES 
router.get("/active/all", internController.getActiveInterns);

// CREATE
router.post("/", internController.createIntern);

// GET ALL
router.get("/", internController.getAllInterns);

// UPDATE
router.put("/:id", internController.updateIntern);

// DELETE (soft delete)
router.delete("/:id", internController.softDeleteIntern);

//  DYNAMIC ROUTE LAST
router.get("/:id", internController.getInternById);

module.exports = router;