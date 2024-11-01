
const Student = require('../model/studentData')

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.createStudent = async (req, res) => {
    const { name, roll, subjects } = req.body

    try {
        const student = await Student.create(req.body)
        
        res.status(200).json(student);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

exports.getSpecStudent = async (req, res) => {
    const roll = req.params.roll;
    try {
        const student = await Student.findOne({ roll: roll });
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.updateStudent = async (req, res) => {
    const roll = req.params.roll;
    try {
        const updatedStudent = await Student.findOneAndUpdate({ roll: roll }, req.body, { new: true });
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


exports.removeStudent = async (req, res) => {
    const roll = req.params.roll;
    try {
        await Student.findOneAndDelete({ roll: roll });
        res.status(204).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

