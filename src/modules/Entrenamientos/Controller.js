import {Entrenamientos}from "./Model.js"
    
 /**
  * @description Get all Entrenamientoss
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
 export const index = async (req, res, next) => {
   try {
     const entrenamientos = await Entrenamientos.findAll({
      include: [
        {
          association: "user",
          attributes: {
            exclude: ["password"],
          },
        },
        "ejercicio",
      ],

    });
     res.status(200).json(entrenamientos);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Get a single Entrenamientos
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const show = async (req, res, next) => {
   try {
     const entrenamiento = await Entrenamientos.findByPk(req.params.id);
     if (!entrenamiento) {
       throw { status: 404, message: "entrenamiento not found" };
     }
     res.status(200).json(entrenamiento);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Create a new Entrenamientos
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const store = async (req, res, next) => {
   try {
     const entrenamiento = await Entrenamientos.create(req.body, {
       validate: true,
     });
     res.status(201).json({
        status: "ok",
        message: "Entrenamientos created successfully",
     });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Update a Entrenamientos
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const update = async (req, res, next) => {
   try {
     const entrenamiento = await EntrenamientosfindByPk(req.params.id);
     if (!entrenamiento) {
       throw { status: 404, message: "Entrenamientos not found" };
     }
     await entrenamiento.update(req.body);
     await entrenamiento.save();
      res.status(200).json({
        status: "ok",
        message: "Entrenamientos updated successfully"
      });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Delete a Entrenamientos
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 
 export const destroy = async (req, res, next) => {
   try {
     const entrenamiento = await Entrenamientos.findByPk(req.params.id);
     if (!entrenamiento) {
       throw { status: 404, message: "Entrenamientos not found" };
     }
      await entrenamiento.destroy();
      res.status(204).json({
        status: "ok",
        message: "Entrenamientos deleted successfully" 
      });
   } catch (error) {
     next(error);
   }
 };
 
 export default { index, show, store, update, destroy };

