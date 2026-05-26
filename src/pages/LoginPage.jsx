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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Restaurant SaaS Platform
        </h1>

        <div className="flex flex-col gap-4">
          <input
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition"
          >
            Login
          </button>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          <p>Admin Login → admin / admin123</p>
          <p>Owner Login → owner / owner123</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
