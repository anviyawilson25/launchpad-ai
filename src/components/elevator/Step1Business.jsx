import { businessTypes } from "../../data/businessTypes";
const Step1Business = ({ formData, handleChange }) => {
  return (
    <div className="space-y-6 mt-8">
      {/* Business Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Business Name
        </label>

        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="Enter your business name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Business Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Business Type
        </label>

        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Business Type</option>

        {businessTypes.map((type) => (
        <option key={type} value={type}>
        {type}
        </option>
        ))}
        </select>
      </div>

      {/* Product / Service */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Product / Service
        </label>

        <textarea
          name="productService"
          value={formData.productService}
          onChange={handleChange}
          rows="4"
          placeholder="Describe your product or service"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
      </div>
    </div>
  );
};

export default Step1Business;