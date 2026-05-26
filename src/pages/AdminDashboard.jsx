import StatsCard from "../components/StatsCard";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>

          <p className="text-gray-600 mt-2">
            Senior Onboarding Specialist Interface
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <StatsCard title="Total Restaurants" value="5" />

          <StatsCard title="Active Restaurants" value="4" />

          <StatsCard title="Pending Payments" value="2" />

          <StatsCard title="Failed Orders" value="1" />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Admin Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate("/admin/create-restaurant")}
              className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-medium transition"
            >
              Create Restaurant
            </button>

            <button
              onClick={() => navigate("/admin/add-menu-item")}
              className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-medium transition"
            >
              Add Menu Item
            </button>

            <button
              onClick={() => navigate("/admin/create-owner")}
              className="bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-medium transition"
            >
              Create Owner Credentials
            </button>

            <button
              onClick={() => navigate("/admin/troubleshooting")}
              className="bg-red-500 hover:bg-red-600 text-white py-4 rounded-lg font-medium transition"
            >
              Troubleshooting Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
