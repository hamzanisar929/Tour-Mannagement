import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();

    res.status(200).json({
      success: true,
      message: "Booking created successfully!",
      data: savedBooking,
    });
  } catch (error) {
    console.log("error in Create Booking Controller", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create Booking, Try again!",
    });
  }
};

export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const booking = await Booking.findById(id);

    res.status(200).json({
      success: true,
      message: "Booking found successfully!",
      data: booking,
    });
  } catch (error) {
    console.log("error in ge Booking Controller", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to get Booking, Try again!",
    });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const bookings = await Booking.find();

    res.status(200).json({
      success: true,
      message: "Bookings found successfully!",
      data: bookings,
    });
  } catch (error) {
    console.log("error in get All Booking Controller", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to get All Booking, Try again!",
    });
  }
};
