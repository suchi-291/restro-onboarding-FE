import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  const role = localStorage.getItem("role");

  return (
    <div className="flex items-center gap-5 px-4 py-4 border-b border-gray-300 mb-5 bg-white shadow-sm">
      <Link
        to="/"
        className="text-gray-700 hover:text-blue-600 font-medium transition"
      >
        Login
      </Link>

      {role === "ADMIN" && (
        <Link
          to="/admin"
          className="text-gray-700 hover:text-blue-600 font-medium transition"
        >
          Admin Dashboard
        </Link>
      )}

      {role === "RESTAURANT_OWNER" && (
        <Link
          to="/owner"
          className="text-gray-700 hover:text-blue-600 font-medium transition"
        >
          Owner Dashboard
        </Link>
      )}

      <Link
        to="/r/pizza-hub"
        className="text-gray-700 hover:text-blue-600 font-medium transition"
      >
        Customer Website
      </Link>

      {role && (
        <button
          onClick={handleLogout}
          className="ml-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default Navbar;
