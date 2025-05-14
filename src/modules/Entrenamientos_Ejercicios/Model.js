import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Entrenamientos_Ejercicios extends Model {}

Entrenamientos_Ejercicios.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        entrenamientos_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: "entrenamientos",
                key: "id",
            },
        },
        ejercicios_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: "ejercicios",
                key: "id"
            },
        },
    },
    {
        sequelize,
        modelName: "entrenamientos_ejercicios",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);
