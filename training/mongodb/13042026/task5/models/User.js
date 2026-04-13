const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minlength: 6
    },
    mobile: {
        type: String,
        match: [/^[6-9]\d{9}$/, "Invalid mobile number"]
    }
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);