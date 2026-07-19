const express = require("express");
const router = express.Router();

const {
    getBusinessInfo,
    createBusinessInfo,
    getBusinessById,
    updateBusinessInfo,
    deleteBusinessInfo
} = require("../controllers/businessController");


// Get all businesses
router.get("/", getBusinessInfo);


// Create business
router.post("/", createBusinessInfo);


// Get business by ID
router.get("/:id", getBusinessById);


// Update business
router.put("/:id", updateBusinessInfo);


// Delete business
router.delete("/:id", deleteBusinessInfo);


module.exports = router;