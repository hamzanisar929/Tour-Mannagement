import express from "express";

import { protectRoute } from "../middlewares/protectRoute.js";
import { verifyAdmin } from "../middlewares/protectRoute.js";
import { createReview } from "../controllers/reviewController.js";

const router = express.Router();

router.post("/:tourId", protectRoute, createReview);

export default router;
