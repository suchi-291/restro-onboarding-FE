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
    <div>
      <h2>Create Restaurant Owner Credentials</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="restaurantId"
          type="number"
          placeholder="Restaurant ID"
          value={formData.restaurantId}
          onChange={handleChange}
        />

        <input
          name="ownerName"
          placeholder="Owner Name"
          value={formData.ownerName}
          onChange={handleChange}
        />

        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Create Owner Credentials</button>
      </form>
    </div>
  );
}

export default OwnerCredentialForm;
