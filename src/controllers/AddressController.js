const StudentAddress = require('../models/StudentAddress');
const TeacherAddress = require('../models/TeacherAddress');

const Teachers = require('../models/Teachers');
const Students = require('../models/Students');


module.exports = {
    async studentsAddressById(req, res) {
      const { user_id } = req.params;
  
      const student = await Students.findByPk(user_id, {
        include: { association: 'students_address' }
      });
  
      return res.json(student.students_address);
    },
  
    async studentAddressCreate(req, res) {
      const { user_id } = req.params;
      const { zipcode, street, number } = req.body;
  
      const student = await Students.findByPk(user_id);
  
      if (!student) {
        return res.status(400).json({ error: 'User not found' });
      }
  
      const studentAddress = await StudentAddress.create({
        zipcode,
        street,
        number,
        user_id,
      });
  
      return res.json(studentAddress);
    },

    async teacherAddressById(req, res) {
        const { user_id } = req.params;
    
        const teacher = await Teachers.findByPk(user_id, {
          include: { association: 'teachers_address' }
        });
    
        return res.json(teacher.teachers_address);
      },
    
      async teacherAddressCreate(req, res) {
        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;
    
        const teacher = await Teachers.findByPk(user_id);
    
        if (!teacher) {
          return res.status(400).json({ error: 'User not found' });
        }
    
        const teacherAddress = await TeacherAddress.create({
          zipcode,
          street,
          number,
          user_id,
        });
    
        return res.json(teacherAddress);
      }

  };