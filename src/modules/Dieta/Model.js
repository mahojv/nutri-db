import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";
import { Users } from "../Users/Model.js"
import { Comidas } from "../Comidas/Model.js";
import { Dieta_Comida } from "../Dieta_Comida/Model.js"

export class Dieta extends Model {}

Dieta.init(
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
        users_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references:{
                model: "users",
                key:"id",
            }
        }
    },
    {
        sequelize,
        modelName: "dieta",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

Dieta.belongsTo(Users, {
    foreignKey:"users_id", 
    as:"user"
})

Dieta.belongsToMany(Comidas,{
    through: Dieta_Comida,
    foreignKey: "dieta_id",
    otherKey:"comidas_id",
    as: "comida",
    })