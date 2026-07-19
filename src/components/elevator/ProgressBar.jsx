const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full mb-8">
      {/* Step Text */}
      <div className="flex justify-between mb-2">
        <p className="text-sm font-medium text-gray-600">
          Step {currentStep} of {totalSteps}
        </p>
        <p className="text-sm font-medium text-blue-600">
          {Math.round(progress)}%
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Step Numbers */}
      <div className="flex justify-between mt-4">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
              ${
                index + 1 <= currentStep
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;