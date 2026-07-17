import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ProgressBar from "../components/elevator/ProgressBar";
import StepIndicator from "../components/elevator/StepIndicator";
import NavigationButtons from "../components/elevator/NavigationButtons";

import Step1Business from "../components/elevator/Step1Business";
import Step2Target from "../components/elevator/Step2Target";
import Step3Brand from "../components/elevator/Step3Brand";
import Step4Review from "../components/elevator/Step4Review";

import useFormValidation from "../hooks/useFormValidation";

function ElevatorPitch() {
  const totalSteps = 4;

  const { validateStep } = useFormValidation();

  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    productService: "",

    targetAudience: "",
    businessLocation: "",
    businessGoal: "",

    brandTone: "",
    uniqueSellingPoint: "",
    keywords: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    const isValid = validateStep(currentStep, formData);

    if (!isValid) return;

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("Generate AI Marketing Content");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Business
            formData={formData}
            handleChange={handleChange}
          />
        );

      case 2:
        return (
          <Step2Target
            formData={formData}
            handleChange={handleChange}
          />
        );

      case 3:
        return (
          <Step3Brand
            formData={formData}
            handleChange={handleChange}
          />
        );

      case 4:
        return (
          <Step4Review
            formData={formData}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

          <h1 className="text-3xl font-bold text-center mb-8">
            LaunchPad AI
          </h1>

          <StepIndicator currentStep={currentStep} />

          <ProgressBar
            currentStep={currentStep}
            totalSteps={totalSteps}
          />

          {renderStep()}

          <NavigationButtons
            currentStep={currentStep}
            totalSteps={totalSteps}
            onNext={handleNext}
            onBack={handleBack}
          />

        </div>
      </div>

      <Footer />
    </>
  );
}

export default ElevatorPitch;