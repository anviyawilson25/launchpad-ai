const NavigationButtons = ({
  currentStep,
  totalSteps,
  onNext,
  onBack,
}) => {
  return (
    <div className="flex justify-between mt-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        disabled={currentStep === 1}
        className={`px-6 py-2 rounded-lg font-medium transition-all duration-300
          ${
            currentStep === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-700 text-white hover:bg-gray-800"
          }`}
      >
        ← Back
      </button>

      {/* Next / Generate Button */}
      <button
        onClick={onNext}
        className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300"
      >
        {currentStep === totalSteps ? "Generate" : "Next →"}
      </button>
    </div>
  );
};

export default NavigationButtons;