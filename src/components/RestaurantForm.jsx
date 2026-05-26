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
    <div>
      <h2>Create Restaurant</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Restaurant Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />

        <input
          name="taxPercentage"
          placeholder="Tax Percentage"
          type="number"
          value={formData.taxPercentage}
          onChange={handleChange}
        />

        <label>
          <input
            name="deliveryEnabled"
            type="checkbox"
            checked={formData.deliveryEnabled}
            onChange={handleChange}
          />
          Delivery Enabled
        </label>

        <button type="submit">Create Restaurant</button>
      </form>
    </div>
  );
}

export default RestaurantForm;
