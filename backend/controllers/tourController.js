import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();

    res.status(201).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (error) {
    console.log("error in createTour controller", error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to create, Try again!" });
  }
};

export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: "Successfully updated Tour",
      data: updatedTour,
    });
  } catch (error) {
    console.log("error in updateTour controller", error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to update Tour, Try again!" });
  }
};

export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted Tour",
    });
  } catch (error) {
    console.log("error in deleteTour controller", error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete Tour, Try again!" });
  }
};

export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully fetched Single Tour",
      data: tour,
    });
  } catch (error) {
    console.log("error in getSingleTour controller", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to get single Tour, Try again!",
    });
  }
};

export const getAllTours = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const tours = await Tour.find()
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully fetched All Tours",
      data: tours,
    });
  } catch (error) {
    console.log("error in getAllTours controller", error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to get All Tours, Try again!" });
  }
};

export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  try {
    const searchedtours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    });

    res.status(200).json({
      success: true,
      count: searchedtours.length,
      message: "Successfully fetched Searched Tours",
      data: searchedtours,
    });
  } catch (error) {
    console.log("error in getTourBySearch controller", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to get Tour by Search, Try again!",
    });
  }
};

export const getFeaturedTours = async (req, res) => {
  try {
    const featuredTours = await Tour.find({ featured: true }).limit(8);

    res.status(200).json({
      success: true,
      count: featuredTours.length,
      message: "Successfully fetched Featured Tours",
      data: featuredTours,
    });
  } catch (error) {
    console.log("error in getFeaturedTours controller", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to get Featured Tours, Try again!",
    });
  }
};

export const getTourCounts = async (req, res) => {
  try {
    const tourCounts = await Tour.estimatedDocumentCount();

    res.status(200).json({
      success: true,
      data: tourCounts,
    });
  } catch (error) {
    console.log("error in getTourCountscontroller", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to get Tour Counts, Try again!",
    });
  }
};
