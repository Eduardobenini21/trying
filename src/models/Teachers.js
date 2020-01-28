const {Model, DataTypes} = require('sequelize');

class Teacher extends Model {
    static init(sequelize) {
        super.init({
            phone: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            full_name: DataTypes.STRING,
            cpf: DataTypes.STRING,
        }, {
            sequelize
    });
    }
    static associate(models){
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'teachers_address' });
        }
}
module.exports = Teacher;