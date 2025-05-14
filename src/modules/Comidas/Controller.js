import {Comidas}from "./Model.js"
    
 /**
  * @description Get all Comidass
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
 export const index = async (req, res, next) => {
   try {
     const comidas = await Comidas.findAll();
     res.status(200).json(comidas);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Get a single Comidas
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const show = async (req, res, next) => {
   try {
     const comida = await Comidas.findByPk(req.params.id);
     if (!comida) {
       throw { status: 404, message: "comida not found" };
     }
     res.status(200).json(comida);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Create a new Comidas
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const store = async (req, res, next) => {
   try {
     const comida = await Comidas.create(req.body, {
       validate: true,
     });
     res.status(201).json({
        status: "ok",
        message: "Comidas created successfully",
     });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Update a Comidas
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const update = async (req, res, next) => {
   try {
     const comida = await ComidasfindByPk(req.params.id);
     if (!comida) {
       throw { status: 404, message: "Comidas not found" };
     }
     await comida.update(req.body);
     await comida.save();
      res.status(200).json({
        status: "ok",
        message: "Comidas updated successfully"
      });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Delete a Comidas
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 
 export const destroy = async (req, res, next) => {
   try {
     const comida = await Comidas.findByPk(req.params.id);
     if (!comida) {
       throw { status: 404, message: "Comidas not found" };
     }
      await comida.destroy();
      res.status(204).json({
        status: "ok",
        message: "Comidas deleted successfully" 
      });
   } catch (error) {
     next(error);
   }
 };
 
 export default { index, show, store, update, destroy };

