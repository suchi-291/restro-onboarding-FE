import { useState } from "react";

function RestaurantForm() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    taxPercentage: "",
    deliveryEnabled: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      location: formData.location,
      taxPercentage: Number(formData.taxPercentage),
      deliveryEnabled: formData.deliveryEnabled,
    };

    console.log("RestaurantRequest DTO:", payload);

    alert("Restaurant created. Check console.");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Create Restaurant
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="name"
            placeholder="Restaurant Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="taxPercentage"
            placeholder="Tax Percentage"
            type="number"
            value={formData.taxPercentage}
            onChange={handleChange}
          />

          <label className="flex items-center gap-3 text-gray-700 font-medium">
            <input
              className="w-5 h-5"
              name="deliveryEnabled"
              type="checkbox"
              checked={formData.deliveryEnabled}
              onChange={handleChange}
            />
            Delivery Enabled
          </label>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
          >
            Create Restaurant
          </button>
        </form>
      </div>
    </div>
  );
}

export default RestaurantForm;
