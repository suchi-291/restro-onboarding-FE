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
    <div>
      <h2>Add Menu Item</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="restaurantId"
          placeholder="Restaurant ID"
          type="number"
          value={formData.restaurantId}
          onChange={handleChange}
        />

        <input
          name="itemName"
          placeholder="Item Name"
          value={formData.itemName}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price"
          type="number"
          value={formData.price}
          onChange={handleChange}
        />

        <label>
          <input
            name="available"
            type="checkbox"
            checked={formData.available}
            onChange={handleChange}
          />
          Available
        </label>

        <button type="submit">Add Menu Item</button>
      </form>
    </div>
  );
}

export default MenuItemForm;
