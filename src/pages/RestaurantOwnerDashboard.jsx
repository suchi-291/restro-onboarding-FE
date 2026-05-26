import StatsCard from "../components/StatsCard";
import { useNavigate } from "react-router-dom";

function RestaurantOwnerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Restaurant Owner Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Restaurant Operations Management Interface
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <StatsCard title="Today's Orders" value="12" />

          <StatsCard title="Pending Orders" value="3" />

          <StatsCard title="Delivered Orders" value="8" />

          <StatsCard title="Failed Payments" value="1" />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Restaurant Operations
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <button
              onClick={() => navigate("/owner/add-menu-item")}
              className="bg-yellow-600 hover:bg-green-700 text-white py-4 rounded-lg font-medium transition"
            >
              Add Menu Item
            </button>
            <button
              onClick={() => navigate("/owner/update-delivery")}
              className="rounded-lg bg-purple-600 py-4 text-white"
            >
              Update Delivery
            </button>

            <button className="rounded-lg bg-blue-600 py-4 text-white">
              View Orders
            </button>

            <button className="rounded-lg bg-green-600 py-4 text-white">
              Revenue Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantOwnerDashboard;
