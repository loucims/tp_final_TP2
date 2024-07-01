import {Router} from "express";
import { validateSondaId } from "../middlewares/validateSondaId.js";
import SondasController from "../controllers/SondasController.js";

const sondasController = new SondasController()

const sondasRoutes = Router();

sondasRoutes.get('/', sondasController.mostrarSondas)
sondasRoutes.post('/inicializar', sondasController.inicializarSondas)
// sondasRoutes.post('/create', sondasController.createSonda);

sondasRoutes.get('/datos', sondasController.mostrarDatosSondas)

sondasRoutes.use(validateSondaId)

sondasRoutes.get('/datosPorId', sondasController.mostrarDatosSondaPorId)



export {sondasRoutes}