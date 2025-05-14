import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Dieta_Comida extends Model {}

Dieta_Comida.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        dieta_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: "dieta",
                key: "id",
            },
        },
        comidas_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: "comidas",
                key: "id"
            },
        },
    },
    {
        sequelize,
        modelName: "Dieta_comida",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);
