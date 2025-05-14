import { Router } from "express";
import { index, show, store, update, destroy } from "./Controller.js";

export const dietaRouter = Router();

dietaRouter.get("/", index);
dietaRouter.get("/:id", show);
dietaRouter.post("/", store);
dietaRouter.put("/:id", update);
dietaRouter.delete("/:id", destroy); 
