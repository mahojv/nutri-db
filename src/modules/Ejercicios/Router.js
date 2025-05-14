import { Router } from "express";
import { index, show, store, update, destroy } from "./Controller.js";

export const ejerciciosRouter = Router();

ejerciciosRouter.get("/", index);
ejerciciosRouter.get("/:id", show);
ejerciciosRouter.post("/", store);
ejerciciosRouter.put("/:id", update);
ejerciciosRouter.delete("/:id", destroy); 
