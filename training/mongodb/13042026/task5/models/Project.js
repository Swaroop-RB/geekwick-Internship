const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: String,
    budget: Number,
    team: [String],
    status: {
        type: String,
        enum: ["Not Started", "Ongoing", "Completed"] 
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Intern"
    }]
});

module.exports = mongoose.models.Project || mongoose.model("Project", projectSchema);