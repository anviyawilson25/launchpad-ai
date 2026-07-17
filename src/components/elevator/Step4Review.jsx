const Step4Review = ({ formData }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        Review Your Information
      </h3>

      <div className="bg-gray-50 rounded-lg shadow p-6 space-y-4">

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-700">
            Business Name
          </span>
          <span>{formData.businessName || "-"}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-700">
            Business Type
          </span>
          <span>{formData.businessType || "-"}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-700">
            Product / Service
          </span>
          <span>{formData.productService || "-"}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-700">
            Target Audience
          </span>
          <span>{formData.targetAudience || "-"}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-700">
            Business Location
          </span>
          <span>{formData.businessLocation || "-"}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-700">
            Business Goal
          </span>
          <span>{formData.businessGoal || "-"}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-700">
            Brand Tone
          </span>
          <span>{formData.brandTone || "-"}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-700">
            Unique Selling Point
          </span>
          <span>{formData.uniqueSellingPoint || "-"}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-gray-700">
            Keywords
          </span>
          <span>{formData.keywords || "-"}</span>
        </div>

      </div>

      <p className="mt-6 text-center text-gray-500">
        Please review your information before generating AI marketing content.
      </p>
    </div>
  );
};

export default Step4Review;