const Intern = require("../models/Intern");

// CREATE
exports.createIntern = async (req, res) => {
    try {
        const intern = await Intern.create(req.body);
        res.status(201).json(intern);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ALL
exports.getAllInterns = async (req, res) => {
    try {
        const interns = await Intern.find();
        res.status(200).json(interns);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET BY ID
exports.getInternById = async (req, res) => {
    try {
        const intern = await Intern.findById(req.params.id);
        if (!intern) return res.status(404).json({ msg: "Not found" });
        res.json(intern);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE
exports.updateIntern = async (req, res) => {
    try {
        const intern = await Intern.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.json(intern);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// SOFT DELETE
exports.softDeleteIntern = async (req, res) => {
    try {
        const intern = await Intern.findByIdAndUpdate(
            req.params.id,
            { isDeleted: true },
            { new: true }
        );
        res.json(intern);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ACTIVE INTERNS
exports.getActiveInterns = async (req, res) => {
    const interns = await Intern.find({ isActive: true, isDeleted: false });
    res.json(interns);
};