import { User } from "../../../../database/models/User";

// CRUD USER

// Get all users
export const getAllUsers = async (_req: any, res: any) => {
  try {
    const users = await User.findAll();
    if (users.length === 0) {
      return res.status(401).json({ message: "No users found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};
