import { useState } from "react";

const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateStep = (step, formData) => {
    let newErrors = {};

    switch (step) {
      case 1:
        if (!formData.businessName.trim()) {
          newErrors.businessName = "Business Name is required";
        }

        if (!formData.businessType) {
          newErrors.businessType = "Please select a Business Type";
        }

        if (!formData.productService.trim()) {
          newErrors.productService = "Product / Service is required";
        }
        break;

      case 2:
        if (!formData.targetAudience.trim()) {
          newErrors.targetAudience = "Target Audience is required";
        }

        if (!formData.businessLocation.trim()) {
          newErrors.businessLocation = "Business Location is required";
        }

        if (!formData.businessGoal) {
          newErrors.businessGoal = "Please select a Business Goal";
        }
        break;

      case 3:
        if (!formData.brandTone) {
          newErrors.brandTone = "Please select a Brand Tone";
        }

        if (!formData.uniqueSellingPoint.trim()) {
          newErrors.uniqueSellingPoint =
            "Unique Selling Point is required";
        }

        if (!formData.keywords.trim()) {
          newErrors.keywords = "Keywords are required";
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return {
    errors,
    validateStep,
  };
};

export default useFormValidation;