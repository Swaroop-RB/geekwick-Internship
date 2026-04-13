const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,   // ✅ Basic
        unique: true,     // ✅ Intermediate
        match: [/^\S+@\S+\.\S+$/, "Please use valid email"] // ✅ Regex
    },
    salary: {
        type: Number,
        max: 100000       // ✅ Intermediate (test rule)
    },
    department: String
}, {
    timestamps: true
});

module.exports = mongoose.models.Employee || mongoose.model("Employee", employeeSchema);