import { Router } from "express";
import { index, show, store, update, destroy } from "./Controller.js";

export const entrenamientosRouter = Router();

entrenamientosRouter.get("/", index);
entrenamientosRouter.get("/:id", show);
entrenamientosRouter.post("/", store);
entrenamientosRouter.put("/:id", update);
entrenamientosRouter.delete("/:id", destroy); 
