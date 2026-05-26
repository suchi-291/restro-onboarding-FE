import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import RestaurantOwnerDashboard from './pages/RestaurantOwnerDashboard';
import CustomerWebsite from './pages/CustomerWebsite';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import CreateOwnerPage from './pages/admin/CreateOwnerPage';
import CreateRestaurantPage from './pages/admin/CreateRestaurantPage';
import AddMenuItemPage from './pages/admin/AddMenuItem';
import TroubleshootingPage from './pages/admin/TroubleShootingPage';
import CustomerOrderPage from './pages/customer/CustomerOrderPage';
import CustomerPaymentPage from './pages/customer/CustomerPaymentPage';
import UpdateDeliveryPage from "./pages/owner/UpdateDeliveryPage";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/create-restaurant"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <CreateRestaurantPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/owner/add-menu-item"
            element={
              <ProtectedRoute allowedRoles={["RESTAURANT_OWNER"]}>
                <AddMenuItemPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/create-owner"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <CreateOwnerPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/troubleshooting"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <TroubleshootingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/owner"
            element={
              <ProtectedRoute allowedRoles={["RESTAURANT_OWNER"]}>
                <RestaurantOwnerDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/owner/update-delivery"
            element={
              <ProtectedRoute allowedRoles={["RESTAURANT_OWNER"]}>
                <UpdateDeliveryPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/r/:restaurantSlug/place-order"
            element={<CustomerOrderPage />}
          />

          <Route
            path="/r/:restaurantSlug/payment"
            element={<CustomerPaymentPage />}
          />
          <Route path="/r/:restaurantSlug" element={<CustomerWebsite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
