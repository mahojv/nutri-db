import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";


export class Comidas extends Model { }

Comidas.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredientes: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        instrucciones: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        calorias: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        sequelize,
        modelName: "comidas",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

