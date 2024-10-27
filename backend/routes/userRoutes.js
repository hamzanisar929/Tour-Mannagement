import express from "express";
import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  login,
  logout,
  signup,
  updateUser,
} from "../controllers/userController.js";

import { protectRoute } from "../middlewares/protectRoute.js";
import { verifyAdmin } from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/register", signup);
router.post("/login", login);
router.get("/logout", logout);

router.put("/:id", protectRoute, updateUser);
router.delete("/:id", protectRoute, deleteUser);
router.get("/:id", protectRoute, getSingleUser);
router.get("/", protectRoute, verifyAdmin, getAllUsers);

export default router;
