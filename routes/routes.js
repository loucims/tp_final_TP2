import {Router} from "express";
import { sondasRoutes } from "./sondasRoutes.js";

const routes = Router();

// routes.use("/someRoute", someMiddleware, userRoutes);
routes.use("/sondas", sondasRoutes);
// routes.use("/options", optionRoutes)


export default routes;
