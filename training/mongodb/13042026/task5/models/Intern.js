const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },

    age: {
        type: Number,
        min: 18,
        validate: {
            validator: function (value) {
                return value > 20;
            },
            message: "Mentor age must be greater than 20"
        }
    },

    email: {
        type: String,
        required: true,
        unique: true   // 
    },

    department: String,

    isActive: {
        type: Boolean,
        default: true
    },

    // SOFT DELETE
    isDeleted: {
        type: Boolean,
        default: false
    },

    skills: [String],

    address: {
        street: String,
        city: String,
        state: String,
        pincode: Number
    },

    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    }

}, {
    timestamps: true   // 
});

module.exports = mongoose.models.Intern || mongoose.model("Intern", internSchema);