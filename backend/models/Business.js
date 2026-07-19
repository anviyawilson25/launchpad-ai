const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
    },

    businessType: {
      type: String,
      required: true,
    },

    productService: {
      type: String,
      required: true,
    },

    targetAudience: {
      type: String,
      required: true,
    },

    businessLocation: {
      type: String,
    },

    businessGoal: {
      type: String,
    },

    brandTone: {
      type: String,
    },

    uniqueSellingPoint: {
      type: String,
    },

    keywords: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Business", businessSchema);