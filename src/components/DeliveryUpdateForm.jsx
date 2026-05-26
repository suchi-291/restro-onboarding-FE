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
    <div>
      <h2>Update Delivery</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="orderId"
          type="number"
          placeholder="Order ID"
          value={formData.orderId}
          onChange={handleChange}
        />

        <input
          name="deliveryPartnerName"
          placeholder="Delivery Partner Name"
          value={formData.deliveryPartnerName}
          onChange={handleChange}
        />

        <input
          name="trackingNumber"
          placeholder="Tracking Number"
          value={formData.trackingNumber}
          onChange={handleChange}
        />

        <select
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

        <button type="submit">Update Delivery</button>
      </form>
    </div>
  );
}

export default DeliveryUpdateForm;
