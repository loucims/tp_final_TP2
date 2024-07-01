import {Router} from "express";
import { sondasRoutes } from "./sondasRoutes.js";
import { registrosRoutes } from "./registrosRoutes.js";

const routes = Router();

routes.use("/sondas", sondasRoutes);
routes.use('/registros', registrosRoutes)

export default routes;
