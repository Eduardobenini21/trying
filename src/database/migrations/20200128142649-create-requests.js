'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('requests', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      }, 
      title:{
        type: Sequelize.STRING,
        allowNull: false,
      },      
      short_description:{
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
      type:{
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
    return queryInterface.createTable('requests', {
    });

  }
};