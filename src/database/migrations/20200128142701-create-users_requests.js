'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_requests', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      }, 
      student_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'students', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },    
      request_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'requests', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }, 
      teacher_id_1:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'teachers', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      teacher_id_2:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'teachers', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      teacher_id_3:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'teachers', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },      
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_requests', {
    });

  }
};