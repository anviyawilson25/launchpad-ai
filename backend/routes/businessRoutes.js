const express = require("express");
const router = express.Router();

const {
    getBusinessInfo,
    createBusinessInfo
} = require("../controllers/businessController");

router.get("/", getBusinessInfo);

router.post("/", createBusinessInfo);

module.exports = router;