import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Ejercicios extends Model {}

Ejercicios.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        musculos:{
            type: DataTypes.STRING,
            allowNull:false
        },
        img:{
            type: DataTypes.STRING,
            allowNull:false
        },
    },
    {
        sequelize,
        modelName: "ejercicios",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);
