import { useState } from "react";

function PaymentForm() {
  const [formData, setFormData] = useState({
    orderId: "",
    gatewayOrderId: "",
    gatewayPaymentId: "",
    signature: "",
    paymentSuccess: true,
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
      orderId: Number(formData.orderId),
      gatewayOrderId: formData.gatewayOrderId,
      gatewayPaymentId: formData.gatewayPaymentId,
      signature: formData.signature,
      paymentSuccess: formData.paymentSuccess,
    };

    console.log("PaymentValidationRequest DTO:", payload);
    alert("Payment validated. Check console.");
  };

  return (
    <div>
      <h2>Validate Payment</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="orderId"
          type="number"
          placeholder="Order ID"
          value={formData.orderId}
          onChange={handleChange}
        />

        <input
          name="gatewayOrderId"
          placeholder="Gateway Order ID"
          value={formData.gatewayOrderId}
          onChange={handleChange}
        />

        <input
          name="gatewayPaymentId"
          placeholder="Gateway Payment ID"
          value={formData.gatewayPaymentId}
          onChange={handleChange}
        />

        <input
          name="signature"
          placeholder="Signature"
          value={formData.signature}
          onChange={handleChange}
        />

        <label>
          <input
            name="paymentSuccess"
            type="checkbox"
            checked={formData.paymentSuccess}
            onChange={handleChange}
          />
          Payment Success
        </label>

        <button type="submit">Validate Payment</button>
      </form>
    </div>
  );
}

export default PaymentForm;
