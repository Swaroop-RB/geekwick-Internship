const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,

    status: {
        type: String,
        enum: ["Pending", "In Progress", "Completed"]
    },

    priority: String,

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"
    },

    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Task", taskSchema);