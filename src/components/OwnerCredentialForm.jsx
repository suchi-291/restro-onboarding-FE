import { useState } from "react";

function OwnerCredentialForm() {
  const [formData, setFormData] = useState({
    restaurantId: "",
    ownerName: "",
    username: "",
    password: "",
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
      restaurantId: Number(formData.restaurantId),
      ownerName: formData.ownerName,
      username: formData.username,
      password: formData.password,
    };

    console.log("Owner Credential Payload:", payload);

    alert("Owner credentials created. Check console.");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Create Restaurant Owner Credentials
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            name="restaurantId"
            type="number"
            placeholder="Restaurant ID"
            value={formData.restaurantId}
            onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            name="ownerName"
            placeholder="Owner Name"
            value={formData.ownerName}
            onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition"
          >
            Create Owner Credentials
          </button>
        </form>
      </div>
    </div>
  );
}

export default OwnerCredentialForm;
