import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";
import { Ejercicios } from "../Ejercicios/Model.js";
import { Users } from "../Users/Model.js"
import { Entrenamientos_Ejercicios } from "../Entrenamientos_Ejercicios/Model.js";



export class Entrenamientos extends Model {}

Entrenamientos.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
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
        modelName: "entrenamientos",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

Entrenamientos.belongsTo(Users, {
    foreignKey:"users_id", 
    as:"user"
})

Entrenamientos.belongsToMany(Ejercicios,{
    through: Entrenamientos_Ejercicios,
    foreignKey: "entrenamientos_id",
    otherKey:"ejercicios_id",
    as: "ejercicio",
    })
