const Step2Target = ({ formData, handleChange }) => {
  return (
    <div className="space-y-6 mt-8">
      {/* Target Audience */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Target Audience
        </label>

        <input
          type="text"
          name="targetAudience"
          value={formData.targetAudience}
          onChange={handleChange}
          placeholder="e.g. College students, Parents, Small business owners"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Business Location */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Business Location
        </label>

        <input
          type="text"
          name="businessLocation"
          value={formData.businessLocation}
          onChange={handleChange}
          placeholder="e.g. Kochi, Kerala"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Business Goal */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Business Goal
        </label>

        <select
          name="businessGoal"
          value={formData.businessGoal}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Goal</option>
          <option value="Increase Sales">Increase Sales</option>
          <option value="Get More Customers">Get More Customers</option>
          <option value="Increase Brand Awareness">
            Increase Brand Awareness
          </option>
          <option value="Launch a New Product">Launch a New Product</option>
          <option value="Promote Online">Promote Online</option>
        </select>
      </div>
    </div>
  );
};

export default Step2Target;