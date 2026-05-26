import { useState } from "react";

function DeliveryUpdateForm() {
  const [formData, setFormData] = useState({
    orderId: "",
    deliveryPartnerName: "",
    trackingNumber: "",
    deliveryStatus: "PENDING",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      orderId: Number(formData.orderId),
      deliveryPartnerName: formData.deliveryPartnerName,
      trackingNumber: formData.trackingNumber,
      deliveryStatus: formData.deliveryStatus,
    };

    console.log("DeliveryUpdateRequest DTO:", payload);

    alert("Delivery updated. Check console.");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Update Delivery
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            name="orderId"
            type="number"
            placeholder="Order ID"
            value={formData.orderId}
            onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            name="deliveryPartnerName"
            placeholder="Delivery Partner Name"
            value={formData.deliveryPartnerName}
            onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            name="trackingNumber"
            placeholder="Tracking Number"
            value={formData.trackingNumber}
            onChange={handleChange}
          />

          <select
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            name="deliveryStatus"
            value={formData.deliveryStatus}
            onChange={handleChange}
          >
            <option value="PENDING">PENDING</option>

            <option value="ASSIGNED">ASSIGNED</option>

            <option value="PICKED_UP">PICKED_UP</option>

            <option value="OUT_FOR_DELIVERY">OUT_FOR_DELIVERY</option>

            <option value="DELIVERED">DELIVERED</option>

            <option value="CANCELLED">CANCELLED</option>
          </select>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition"
          >
            Update Delivery
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeliveryUpdateForm;
