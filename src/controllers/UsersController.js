const Students = require('../models/Students');
const Teacher = require('../models/Teachers');


module.exports = {

    async studentId(req, res) {
        const { id } = req.params;

        const students = await Students.findByPk(id);

        return res.json(students);
    },


    async students(req, res) {
        const students = await Students.findAll();

        return res.json(students);
    },

    async studentsCreate(req, res) {
        const {phone, email,password, full_name, cpf} = req.body;
    
        const students = await Students.create({phone, email, password, full_name, cpf})

        return res.json(students);
    },

    async teachersId(req, res) {
        const { id } = req.params;

        const teachers = await Teacher.findByPk(id);

        return res.json(teachers);
    },


    async teachers(req, res) {
        const teachers = await Teacher.findAll();

        return res.json(teachers);
    },

    async teachersCreate(req, res) {
        const {phone, email,password, full_name, cpf} = req.body;
    
        const teacher = await Teacher.create({phone, email, password, full_name, cpf})

        return res.json(teacher);
    }
}