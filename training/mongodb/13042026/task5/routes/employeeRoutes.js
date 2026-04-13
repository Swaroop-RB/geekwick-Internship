const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

//  GET /employees
router.get("/", async (req, res) => {
    try {
        const filter = {};

        //  Advanced filter
        if (req.query.department) {
            filter.department = req.query.department;
        }

        const emp = await Employee.find(filter);
        res.json(emp);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;