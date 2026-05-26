import { useState } from "react";

function MenuItemForm() {
  const [formData, setFormData] = useState({
    restaurantId: "",
    itemName: "",
    price: "",
    available: true,
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
      restaurantId: Number(formData.restaurantId),
      itemName: formData.itemName,
      price: Number(formData.price),
      available: formData.available,
    };

    console.log("MenuItemRequest DTO:", payload);

    alert("Menu item added. Check console.");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Add Menu Item</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            name="restaurantId"
            placeholder="Restaurant ID"
            type="number"
            value={formData.restaurantId}
            onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            name="itemName"
            placeholder="Item Name"
            value={formData.itemName}
            onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            name="price"
            placeholder="Price"
            type="number"
            value={formData.price}
            onChange={handleChange}
          />

          <label className="flex items-center gap-3 text-gray-700 font-medium">
            <input
              className="w-5 h-5"
              name="available"
              type="checkbox"
              checked={formData.available}
              onChange={handleChange}
            />
            Available
          </label>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition"
          >
            Add Menu Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default MenuItemForm;
