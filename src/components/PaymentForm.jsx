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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Validate Payment
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            name="orderId"
            type="number"
            placeholder="Order ID"
            value={formData.orderId}
            onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            name="gatewayOrderId"
            placeholder="Gateway Order ID"
            value={formData.gatewayOrderId}
            onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            name="gatewayPaymentId"
            placeholder="Gateway Payment ID"
            value={formData.gatewayPaymentId}
            onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            name="signature"
            placeholder="Signature"
            value={formData.signature}
            onChange={handleChange}
          />

          <label className="flex items-center gap-3 text-gray-700 font-medium">
            <input
              className="w-5 h-5"
              name="paymentSuccess"
              type="checkbox"
              checked={formData.paymentSuccess}
              onChange={handleChange}
            />
            Payment Success
          </label>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition"
          >
            Validate Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;
