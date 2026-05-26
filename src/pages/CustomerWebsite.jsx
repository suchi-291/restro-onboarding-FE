import { useNavigate, useParams } from "react-router-dom";

function CustomerWebsite() {
  const { restaurantSlug } = useParams();

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 capitalize">
            {restaurantSlug?.replace("-", " ")}
          </h1>

          <p className="text-gray-600 mt-2">Customer Ordering Website</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Customer Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate(`/r/${restaurantSlug}/place-order`)}
              className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-medium transition"
            >
              Browse Menu & Place Order
            </button>

            <button
              onClick={() => navigate(`/r/${restaurantSlug}/payment`)}
              className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-medium transition"
            >
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerWebsite;
