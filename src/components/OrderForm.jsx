import { useState } from "react";

function OrderForm() {
  const [restaurantId, setRestaurantId] = useState("");
  const [items, setItems] = useState([
    {
      menuItemId: "",
      quantity: "",
    },
  ]);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];

    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };

    setItems(updatedItems);
  };

  const addItemRow = () => {
    setItems([
      ...items,
      {
        menuItemId: "",
        quantity: "",
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      restaurantId: Number(restaurantId),
      items: items.map((item) => ({
        menuItemId: Number(item.menuItemId),
        quantity: Number(item.quantity),
      })),
    };

    console.log("OrderRequest DTO:", payload);
    alert("Order placed. Check console.");
  };

  return (
    <div>
      <h2>Place Order</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Restaurant ID"
          value={restaurantId}
          onChange={(e) => setRestaurantId(e.target.value)}
        />

        <h3>Order Items</h3>

        {items.map((item, index) => (
          <div key={index}>
            <input
              type="number"
              placeholder="Menu Item ID"
              value={item.menuItemId}
              onChange={(e) =>
                handleItemChange(index, "menuItemId", e.target.value)
              }
            />

            <input
              type="number"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) =>
                handleItemChange(index, "quantity", e.target.value)
              }
            />
          </div>
        ))}

        <button type="button" onClick={addItemRow}>
          Add Another Item
        </button>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default OrderForm;
