import { Dieta } from "./Model.js"

/**
 * @description Get all Dietas
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export const index = async (req, res, next) => {
  try {
    const dieta = await Dieta.findAll({
      include: [
        {
          association: "user",
          attributes: {
            exclude: ["password"],
          },
        },
        "comida",
      ],

    });
    res.status(200).json(dieta);
  } catch (error) {
    next(error);
  }
};

/**
 * @description Get a single Dieta
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export const show = async (req, res, next) => {
  try {
    const dieta = await Dieta.findByPk(req.params.id);
    if (!dieta) {
      throw { status: 404, message: "dieta not found" };
    }
    res.status(200).json(dieta);
  } catch (error) {
    next(error);
  }
};

/**
 * @description Create a new Dieta
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export const store = async (req, res, next) => {
  try {
    const dieta = await Dieta.create(req.body, {
      validate: true,
    });
    res.status(201).json({
      status: "ok",
      message: "Dieta created successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @description Update a Dieta
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export const update = async (req, res, next) => {
  try {
    const dieta = await DietafindByPk(req.params.id);
    if (!dieta) {
      throw { status: 404, message: "Dieta not found" };
    }
    await dieta.update(req.body);
    await dieta.save();
    res.status(200).json({
      status: "ok",
      message: "Dieta updated successfully"
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @description Delete a Dieta
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */

export const destroy = async (req, res, next) => {
  try {
    const dieta = await Dieta.findByPk(req.params.id);
    if (!dieta) {
      throw { status: 404, message: "Dieta not found" };
    }
    await dieta.destroy();
    res.status(204).json({
      status: "ok",
      message: "Dieta deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

export default { index, show, store, update, destroy };

