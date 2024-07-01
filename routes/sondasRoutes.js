import {Router} from "express";
import SondasController from "../controllers/SondasController.js";

const sondasController = new SondasController()

const sondasRoutes = Router();

sondasRoutes.use('/someRoute', sondasController.createSonda);

export {sondasRoutes}