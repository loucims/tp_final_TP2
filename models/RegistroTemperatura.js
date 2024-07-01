import {DataTypes, Model} from "sequelize";
import {dbConnection} from "../dbConnection/dbConnection.js";

class RegistroTemperatura extends Model{}

RegistroTemperatura.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    temperatura: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            max: 100,
            min: -20
        }
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    }
},
{
    sequelize:dbConnection,
    modelName:"RegistroTemperatura",
});

export default RegistroTemperatura