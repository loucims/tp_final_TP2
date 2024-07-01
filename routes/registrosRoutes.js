import {Router} from "express";
import RegistroTemperaturaController from "../controllers/RegistroTemperaturaController.js";
import { validateSondaId } from "../middlewares/validateSondaId.js";
import { validateTemperatura } from "../middlewares/validateTemperatura.js";

const registrosController = new RegistroTemperaturaController()

const registrosRoutes = Router();

registrosRoutes.use(validateSondaId)
registrosRoutes.use(validateTemperatura)

registrosRoutes.post('/create', registrosController.createRegistro);

export {registrosRoutes}