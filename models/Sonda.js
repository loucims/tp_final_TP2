import {DataTypes, Model} from "sequelize";
import {dbConnection} from "../dbConnection/dbConnection.js";

class Sonda extends Model{}

Sonda.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    descripcionSonda: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    sequelize:dbConnection,
    modelName:"Sonda",
});

export default Sonda