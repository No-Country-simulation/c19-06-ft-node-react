import { Class } from "./Class";
import { Reservation } from "./Reservation";
import { User } from "./User";

//MODEL RELATIONS
// Many to many User and Class through Reservation
Class.belongsToMany(User, { through: Reservation, foreignKey: "class_id" });
User.belongsToMany(Class, { through: Reservation, foreignKey: "user_id" });
