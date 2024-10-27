import express from "express";
import {
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTours,
  getTourBySearch,
  getFeaturedTours,
  getTourCounts,
} from "../controllers/tourController.js";

import { protectRoute } from "../middlewares/protectRoute.js";

import { verifyAdmin } from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/", protectRoute, verifyAdmin, createTour);
router.put("/:id", protectRoute, verifyAdmin, updateTour);
router.delete("/:id", protectRoute, verifyAdmin, deleteTour);
router.get("/:id", getSingleTour);
router.get("/", getAllTours);
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTours);
router.get("/search/getTourCounts", getTourCounts);

export default router;
