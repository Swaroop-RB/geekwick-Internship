const mongoose = require("mongoose");

// Import models
const Department = require("./models/Department");
const Intern = require("./models/Intern");

// Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/testdb")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

async function run() {
    try {
        // Step 1: Create Department
        const dept = await Department.create({
            name: "QA",
            location: "Bangalore"
        });

        console.log("Department created:", dept);

        // Step 2: Create Intern using departmentId
        const intern = await Intern.create({
            name: "Swaroop",
            age: 22,
            email: "swaroop@gmail.com",
            departmentId: dept._id,
            skills: ["Node.js", "MongoDB"]
        });

        console.log("Intern created:", intern);

        // Step 3: Fetch with populate (full department object)
        const interns = await Intern.find()
            .populate("departmentId");

        console.log("Populated interns:", interns);

        // Step 4: Fetch only department name
        const internsOnlyName = await Intern.find()
            .populate("departmentId", "name");

        console.log("Only Department Name:", internsOnlyName);

    } catch (error) {
        console.log("Error:", error);
    } finally {
        mongoose.connection.close();
    }
}

run();