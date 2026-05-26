import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("role", "ADMIN");
      navigate("/admin");
    } else if (username === "owner" && password === "owner123") {
      localStorage.setItem("role", "RESTAURANT_OWNER");
      navigate("/owner");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h1>Restaurant SaaS Platform</h1>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
