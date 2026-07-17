const Step3Brand = ({ formData, handleChange }) => {
  return (
    <div className="space-y-6 mt-8">
      {/* Brand Tone */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Brand Tone
        </label>

        <select
          name="brandTone"
          value={formData.brandTone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Brand Tone</option>
          <option value="Professional">Professional</option>
          <option value="Friendly">Friendly</option>
          <option value="Luxury">Luxury</option>
          <option value="Modern">Modern</option>
          <option value="Creative">Creative</option>
          <option value="Fun">Fun</option>
        </select>
      </div>

      {/* Unique Selling Point */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Unique Selling Point (USP)
        </label>

        <textarea
          name="uniqueSellingPoint"
          value={formData.uniqueSellingPoint}
          onChange={handleChange}
          rows="3"
          placeholder="What makes your business different from competitors?"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
      </div>

      {/* Brand Keywords */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Brand Keywords
        </label>

        <input
          type="text"
          name="keywords"
          value={formData.keywords}
          onChange={handleChange}
          placeholder="e.g. Organic, Affordable, Handmade"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Step3Brand;