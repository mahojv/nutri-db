import {Ejercicios}from "./Model.js"
    
 /**
  * @description Get all Ejercicioss
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
 export const index = async (req, res, next) => {
   try {
     const ejercicios = await Ejercicios.findAll();
     res.status(200).json(ejercicios);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Get a single Ejercicios
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const show = async (req, res, next) => {
   try {
     const ejercicio = await Ejercicios.findByPk(req.params.id);
     if (!ejercicio) {
       throw { status: 404, message: "ejercicio not found" };
     }
     res.status(200).json(ejercicio);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Create a new Ejercicios
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const store = async (req, res, next) => {
   try {
     const ejercicio = await Ejercicios.create(req.body, {
       validate: true,
     });
     res.status(201).json({
        status: "ok",
        message: "Ejercicios created successfully",
     });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Update a Ejercicios
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const update = async (req, res, next) => {
   try {
     const ejercicio = await EjerciciosfindByPk(req.params.id);
     if (!ejercicio) {
       throw { status: 404, message: "Ejercicios not found" };
     }
     await ejercicio.update(req.body);
     await ejercicio.save();
      res.status(200).json({
        status: "ok",
        message: "Ejercicios updated successfully"
      });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Delete a Ejercicios
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 
 export const destroy = async (req, res, next) => {
   try {
     const ejercicio = await Ejercicios.findByPk(req.params.id);
     if (!ejercicio) {
       throw { status: 404, message: "Ejercicios not found" };
     }
      await ejercicio.destroy();
      res.status(204).json({
        status: "ok",
        message: "Ejercicios deleted successfully" 
      });
   } catch (error) {
     next(error);
   }
 };
 
 export default { index, show, store, update, destroy };

