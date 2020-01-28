const express = require('express');
const UsersController = require('./controllers/UsersController');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

routes.get('/students/:id', UsersController.studentId);
routes.get('/teachers/:id', UsersController.teachersId);

routes.post('/student', UsersController.studentsCreate);
routes.post('/teacher', UsersController.teachersCreate);



routes.get('/students/:user_id/addresses', AddressController.studentsAddressById);
routes.get('/students/all/:user_id/', AddressController.teacherAddressCreate);

routes.post('/teachers/:user_id/addresses', AddressController.teacherAddressCreate);
routes.post('/teachers/:user_id/addresses', AddressController.studentAddressCreate);



module.exports = routes;