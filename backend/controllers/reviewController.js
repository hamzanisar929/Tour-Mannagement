import Review from "../models/Review.js";
import Tour from "../models/Tour.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  try {
    const newReview = await Review.create({ ...req.body });

    const savedReview = await newReview.save();

    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    res.status(200).json({
      success: true,
      message: "Review posted successfully!",
      data: savedReview,
    });
  } catch (error) {
    console.log("error in Create Review Controller", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create Review, Try again!",
    });
  }
};
