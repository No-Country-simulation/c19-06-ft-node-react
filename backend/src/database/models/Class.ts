import { DataTypes } from "sequelize";
import { sequelize } from "../database";

// Has id, name, description, start_time, end_time, day, teacher_id??, and price
export const Class = sequelize.define(
  "Class",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  },
  {
    paranoid: true,
    deletedAt: "deleted_at"
  }
);

// RELATIONS
