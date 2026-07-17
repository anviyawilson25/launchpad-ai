const StepIndicator = ({ currentStep }) => {
  const stepTitles = [
    "Business Information",
    "Target Audience",
    "Brand Details",
    "Review & Submit",
  ];

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Step {currentStep}
      </h2>

      <p className="text-gray-600 mt-1">
        {stepTitles[currentStep - 1]}
      </p>
    </div>
  );
};

export default StepIndicator;