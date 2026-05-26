import StatsCard from "../components/StatsCard";
import RestaurantForm from "../components/RestaurantForm";
import MenuItemForm from "../components/MenuItemForm";
import OwnerCredentialForm from "../components/OwnerCredentialForm";

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Senior Onboarding Specialist Interface</p>

      <div>
        <StatsCard title="Total Restaurants" value="5" />
        <StatsCard title="Active Restaurants" value="4" />
        <StatsCard title="Pending Payments" value="2" />
        <StatsCard title="Failed Orders" value="1" />
      </div>

      <hr />

      <RestaurantForm />
      <MenuItemForm />
      <OwnerCredentialForm />
    </div>
  );
}

export default AdminDashboard;
