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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Place Order</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            placeholder="Restaurant ID"
            value={restaurantId}
            onChange={(e) => setRestaurantId(e.target.value)}
          />

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Order Items
            </h3>

            <div className="flex flex-col gap-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <input
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number"
                    placeholder="Menu Item ID"
                    value={item.menuItemId}
                    onChange={(e) =>
                      handleItemChange(index, "menuItemId", e.target.value)
                    }
                  />

                  <input
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number"
                    placeholder="Quantity"
                    value={item.quantity}
                    onChange={(e) =>
                      handleItemChange(index, "quantity", e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={addItemRow}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-medium transition"
          >
            Add Another Item
          </button>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
