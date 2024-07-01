import Sonda from "./Sonda.js";
import RegistroTemperatura from "./RegistroTemperatura.js";
import { dbConnection } from "../dbConnection/dbConnection.js";

Sonda.hasMany(RegistroTemperatura, { foreignKey: 'sondaId' });
RegistroTemperatura.belongsTo(Sonda, { foreignKey: 'sondaId' });


export { Sonda, RegistroTemperatura };