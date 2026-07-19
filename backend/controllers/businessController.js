const Business = require("../models/Business");


// POST - Create business information
const createBusinessInfo = async (req, res) => {
  try {
    console.log(req.body);

    const business = new Business(req.body);

    await business.save();

    res.status(201).json({
      success: true,
      message: "Business details saved successfully.",
      data: business
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


// GET - Get all business information
const getBusinessInfo = async (req, res) => {
  try {
    const businesses = await Business.find();

    res.status(200).json({
      success: true,
      data: businesses
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// GET - Get business by ID
const getBusinessById = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);

    if (!business) {
      return res.status(404).json({
        success: false,
        message: "Business not found"
      });
    }

    res.status(200).json({
      success: true,
      data: business
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// PUT - Update business
const updateBusinessInfo = async (req, res) => {
  try {
    const business = await Business.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!business) {
      return res.status(404).json({
        success: false,
        message: "Business not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Business updated successfully",
      data: business
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// DELETE - Delete business
const deleteBusinessInfo = async (req, res) => {
  try {
    const business = await Business.findByIdAndDelete(req.params.id);

    if (!business) {
      return res.status(404).json({
        success: false,
        message: "Business not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Business deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


module.exports = {
  getBusinessInfo,
  createBusinessInfo,
  getBusinessById,
  updateBusinessInfo,
  deleteBusinessInfo
};