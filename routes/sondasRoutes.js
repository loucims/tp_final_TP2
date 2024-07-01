import {Router} from "express";
import SondasController from "../controllers/SondasController.js";

const sondasController = new SondasController()

const sondasRoutes = Router();

sondasRoutes.post('/inicializar', sondasController.inicializarSondas)
sondasRoutes.get('/mostrar')
// sondasRoutes.post('/create', sondasController.createSonda);

export {sondasRoutes}