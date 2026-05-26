import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
      localStorage.removeItem("role");
      navigate("/");
    };

    const role = localStorage.getItem("role");
  return (
    <div
      style={{
        padding: "16px",
        borderBottom: "1px solid #ccc",
        marginBottom: "20px",
      }}
    >
      <Link to="/" style={{ marginRight: "20px" }}>
        Login
      </Link>
      {role=="ADMIN" &&
      <Link to="/admin" style={{ marginRight: "20px" }}>
        Admin Dashboard
      </Link>}
      {role=="RESTAURANT_OWNER" &&
      <Link to="/owner" style={{ marginRight: "20px" }}>
        Owner Dashboard
      </Link>}
      <Link to="/r/pizza-hub">Customer Website</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;
