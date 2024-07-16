import { DataTypes } from "sequelize";
import { sequelize } from "../database";

// Has id, class_id, user_id, and date
export const Reservation = sequelize.define(
  "Reservation",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    paranoid: true,
    deletedAt: "deleted_at"
  }
);
