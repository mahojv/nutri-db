import { DataTypes, Model, NUMBER } from "sequelize";
import { sequelize } from "../../database/sequelize.js";
import { Roles } from "../Roles/Model.js"

export class Users extends Model { }

Users.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        middle_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        second_lastname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
           
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            get() {
                const value = this.getDataValue("status");
                return value ? 'active' : 'inactive';
            }
        },
        roles_id: {
            type: DataTypes.BIGINT,
            allowNull:true,
            references:{
                model: "roles",
                key: "id",
            },

        },
        nxtvisit: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: "users",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

Users.belongsTo(Roles, { foreignKey: "roles_id", as: "role" });
