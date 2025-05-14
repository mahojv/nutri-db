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
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        second_lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {isNumeric: true},
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
            allowNull:false,
            references:{
                model: "roles",
                key: "id",
            },

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

Users.belongsTo(Roles, { foreignKey: "role_id", as: "role" });
