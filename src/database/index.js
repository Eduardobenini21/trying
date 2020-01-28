const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const StudentAddress = require('../models/StudentAddress');
const TeacherAddress = require('../models/TeacherAddress');
const Student = require('../models/Students');
const Teacher = require('../models/Teachers');

const connection = new Sequelize(dbConfig);

TeacherAddress.init(connection);
StudentAddress.init(connection);
Student.init(connection);
Teacher.init(connection);


Student.associate(connection.models);
Teacher.associate(connection.models);
TeacherAddress.associate(connection);
StudentAddress.associate(connection);


module.exports = connection;