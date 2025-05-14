import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Roles extends Model {}

Roles.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize,
        modelName: "roles",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);
