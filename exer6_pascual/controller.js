import mongoose from 'mongoose';

// Define the schema for the Student model
const StudentSchema = new mongoose.Schema({
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});

// Create the Student model
const Student = mongoose.model('Student', StudentSchema);

// Function to save a new student
async function saveStudent(req, res) {
    const { stdnum, fname, lname, age } = req.body;
    if (stdnum && fname && lname && age) {
        try {
            await Student.create(req.body);
            res.send({ inserted: true });
        } catch (error) {
            res.status(500).send({ inserted: false, error: error.message });
        }
    } else {
        res.status(400).send({ inserted: false, error: 'Error!' });
    }
}

// Function to update a student's last name
async function updateStudent(req, res) {
    const { fname } = req.body;
    try {
        await Student.updateOne({ fname }, { lname: 'Parker' });
        res.send({ updated: true });
    } catch (error) {
        res.status(500).send({ updated: false, error: error.message });
    }
}

// Function to remove a specific student
async function removeStudent(req, res) {
    const { stdnum } = req.body;
    try {
        await Student.deleteOne({ stdnum });
        res.send({ deleted: true });
    } catch (error) {
        res.status(500).send({ deleted: false, error: error.message });
    }
}

// Function to remove all students
async function removeAllStudents(req, res) {
    try {
        await Student.deleteMany({});
        res.send({ deleted: true });
    } catch (error) {
        res.status(500).send({ deleted: false, error: error.message });
    }
}

// Function to get a specific student by student number
async function getStudent(req, res) {
    const { stdnum } = req.query;
    try {
        const student = await Student.findOne({ stdnum });
        if (student) {
            res.send(student);
        } else {
            res.send([]);
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}
// Function to get all students
async function getAllStudents(req, res) {
    try {
        const students = await Student.find();
        res.send(students);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

// Export all functions for use in other modules
export {
    saveStudent, updateStudent, removeStudent, removeAllStudents, getStudent, getAllStudents
};