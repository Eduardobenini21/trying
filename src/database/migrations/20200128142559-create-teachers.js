'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('teachers', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      phone:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },      
      password:{
        type: Sequelize.STRING,
        allowNull: false,
      },      
      full_name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      category_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'categories', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },         
      create_at:{
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
    return queryInterface.createTable('teachers', {
    });

  }
};