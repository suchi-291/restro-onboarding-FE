import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import RestaurantOwnerDashboard from './pages/RestaurantOwnerDashboard';
import CustomerWebsite from './pages/CustomerWebsite';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

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
            path="/owner"
            element={
              <ProtectedRoute allowedRoles={["RESTAURANT_OWNER"]}>
                <RestaurantOwnerDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/r/:restaurantSlug" element={<CustomerWebsite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
