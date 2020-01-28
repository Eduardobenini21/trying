const {Model, DataTypes} = require('sequelize');

class StudentsAddress extends Model {
    static init(sequelize) {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            complement: DataTypes.STRING,
            number: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.INTEGER,
        }, {
            sequelize
    });
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'students'});
    }
}
module.exports = StudentsAddress;