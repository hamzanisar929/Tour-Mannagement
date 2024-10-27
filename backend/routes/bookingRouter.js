import express from "express";

import { protectRoute } from "../middlewares/protectRoute.js";
import { verifyAdmin } from "../middlewares/protectRoute.js";
import {
  createBooking,
  getAllBooking,
  getBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", protectRoute, createBooking);
router.get("/:id", protectRoute, getBooking);
router.get("/", protectRoute, verifyAdmin, getAllBooking);

export default router;
``;
