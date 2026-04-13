const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    internId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Intern"
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ["Present", "Absent", "Late"] // ✅ Advanced
    },
    checkInTime: String
});

module.exports = mongoose.models.Attendance || mongoose.model("Attendance", attendanceSchema);