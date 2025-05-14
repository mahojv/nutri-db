import { Router } from "express";
import { index, show, store, update, destroy } from "./Controller.js";

export const comidasRouter = Router();

comidasRouter.get("/", index);
comidasRouter.get("/:id", show);
comidasRouter.post("/", store);
comidasRouter.put("/:id", update);
comidasRouter.delete("/:id", destroy); 
