'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students_address', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'students', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },   
      zipcode:{
        type: Sequelize.STRING,
        allowNull: false,
      },      
      street:{
        type: Sequelize.STRING,
        allowNull: false,
      },      
      number:{
        type: Sequelize.STRING,
        allowNull: false,
      },    
      complement:{
        type: Sequelize.STRING,
        allowNull: false,
      },     
      city:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      state:{
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.createTable('students_address', {
    });

  }
};