import {Sequelize} from "sequelize";
import {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_DIALECT,
    DB_PORT,
} from "../config/config.js";   

let dbConnection
try {
    const dbConnectionRaw = new Sequelize('', DB_USER, DB_PASSWORD,{
        host: DB_HOST,
        dialect: DB_DIALECT,
        port: DB_PORT,
    });
    await dbConnectionRaw.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`);
    await dbConnectionRaw.close()

    dbConnection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,{
        host: DB_HOST,
        dialect: DB_DIALECT,
        port: DB_PORT,
    });
    await dbConnection.authenticate();
    console.log("La conexión se ha establecido exitosamente");
} catch (error) {
    console.log("No se pudo conectar a la base de datos", error);
}

export {dbConnection};