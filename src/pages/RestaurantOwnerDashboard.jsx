import OrderForm from "../components/OrderForm";
import PaymentForm from "../components/PaymentForm";
import DeliveryUpdateForm from "../components/DeliveryUpdateForm";
import StatsCard from "../components/StatsCard";

function RestaurantOwnerDashboard() {
  return (
    <div>
      <h1>Restaurant Owner Dashboard</h1>

      <div>
        <StatsCard title="Today's Orders" value="12" />
        <StatsCard title="Pending Orders" value="3" />
        <StatsCard title="Delivered Orders" value="8" />
        <StatsCard title="Failed Payments" value="1" />
      </div>

      <hr />

      <OrderForm />

      <hr />

      <PaymentForm />

      <hr />

      <DeliveryUpdateForm />
    </div>
  );
}

export default RestaurantOwnerDashboard;
