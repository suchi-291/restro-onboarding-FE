````md
# Frontend Technical Documentation — Restaurant SaaS Onboarding Platform

# Project Overview

This frontend application is a simplified SaaS-based restaurant onboarding and operational management platform inspired by systems such as:

- Swiggy Merchant Dashboard
- Zomato Partner Platform
- Shopify/Substack-style hosted onboarding platforms

The system supports three user experiences:

```text
1. Super Admin / Onboarding Specialist
2. Restaurant Owner
3. Customer Ordering Website
```

The frontend is designed to simulate the operational lifecycle of onboarding restaurants, configuring menu items, managing orders, validating payments, and updating deliveries.

---

# Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React |
| Build Tool | Vite |
| Routing | React Router DOM |
| API Client | Axios (planned) |
| State Management | React useState |
| Authentication | Mock localStorage role-based auth |
| Styling | Basic CSS / inline styling |

---

# Frontend Architecture

The frontend follows a component-based architecture.

```text
Pages
↓
Components
↓
API Layer
↓
Backend APIs (planned)
```

---

# Folder Structure

```text
src
│
├── api
│   └── api.js
│
├── pages
│   ├── LoginPage.jsx
│   ├── AdminDashboard.jsx
│   ├── RestaurantOwnerDashboard.jsx
│   └── CustomerWebsite.jsx
│
├── components
│   ├── Navbar.jsx
│   ├── ProtectedRoute.jsx
│   ├── StatsCard.jsx
│   ├── RestaurantForm.jsx
│   ├── MenuItemForm.jsx
│   ├── OwnerCredentialForm.jsx
│   ├── OrderForm.jsx
│   ├── PaymentForm.jsx
│   └── DeliveryUpdateForm.jsx
│
├── App.jsx
└── main.jsx
```

---

# Architectural Decisions

# Why Separate Pages and Components?

## Pages

Pages represent complete user interfaces/screens.

Example:

```text
Admin Dashboard
Restaurant Owner Dashboard
Customer Website
```

Pages are responsible for:
- layout
- grouping components
- routing

---

## Components

Components represent reusable UI building blocks.

Example:

```text
RestaurantForm
OrderForm
PaymentForm
StatsCard
```

Components are responsible for:
- collecting input
- handling local state
- rendering specific UI logic

This separation improves:
- maintainability
- reusability
- scalability

---

# User Roles and Product Design

The frontend simulates three platform personas.

---

# 1. Super Admin / Onboarding Specialist

Represents the SaaS platform operator.

Responsibilities:

```text
Restaurant onboarding
Menu configuration
Owner account creation
Troubleshooting operations
```

Accessible routes:

```text
/admin
```

Dashboard includes:

- restaurant creation
- menu onboarding
- owner credential creation
- operational statistics

---

# 2. Restaurant Owner

Represents the restaurant partner.

Responsibilities:

```text
Manage orders
Track payments
Update deliveries
```

Accessible routes:

```text
/owner
```

Dashboard includes:

- order management
- payment validation
- delivery updates
- operational metrics

---

# 3. Customer

Represents public ordering experience.

Responsibilities:

```text
View restaurant page
Place order
Make payment
Track delivery
```

Accessible routes:

```text
/r/:restaurantSlug
```

Example:

```text
/r/pizza-hub
```

Customer pages are public and do not require login.

---

# Routing Design

Routing is implemented using React Router DOM.

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/owner" element={<RestaurantOwnerDashboard />} />
    <Route path="/r/:restaurantSlug" element={<CustomerWebsite />} />
  </Routes>
</BrowserRouter>
```

---

# Why Dynamic Route Parameters?

Customer websites use:

```text
/r/:restaurantSlug
```

instead of hardcoded pages.

Example:

```text
/r/pizza-hub
/r/burger-house
```

This simulates real SaaS multi-tenant restaurant hosting.

Similar to:

```text
substack.com/@creator
shopify storefronts
```

---

# Authentication Design

Current authentication is intentionally simplified.

---

# Mock Authentication Flow

Login page accepts:

```text
admin / admin123
owner / owner123
```

On successful login:

```js
localStorage.setItem("role", "ADMIN");
```

or:

```js
localStorage.setItem("role", "RESTAURANT_OWNER");
```

Then user is redirected based on role.

---

# Why Mock Authentication Was Used

For this prototype:

- focus is on architecture understanding
- avoids JWT complexity initially
- helps visualize role-based access
- simplifies frontend learning

---

# Production Authentication Approach

In production systems:

```text
Frontend receives JWT token
↓
Token stored securely
↓
Every API call sends Authorization header
↓
Backend validates token and role
```

Example:

```text
Authorization: Bearer eyJhbGciOi...
```

---

# Protected Route Design

Protected routes were implemented using a reusable `ProtectedRoute` component.

Example:

```jsx
<ProtectedRoute allowedRoles={["ADMIN"]}>
    <AdminDashboard />
</ProtectedRoute>
```

---

# Why Protected Routes Were Introduced

Purpose:

- prevent unauthorized UI access
- simulate role-based authorization
- mirror real enterprise frontend behavior

---

# Role-Based Access Matrix

| Route | Allowed Role |
|---|---|
| `/admin` | ADMIN |
| `/owner` | RESTAURANT_OWNER |
| `/r/:restaurantSlug` | Public |

---

# Navbar Design

A reusable `Navbar` component was added to support navigation across:

```text
Admin Dashboard
Owner Dashboard
Customer Website
```

Purpose:

- simulate SaaS navigation
- improve demo usability
- provide quick role switching

Logout functionality removes role from localStorage.

---

# Component Design Decisions

# RestaurantForm

Purpose:

```text
Onboard new restaurant
```

Fields:

```text
name
location
taxPercentage
deliveryEnabled
```

Maps to backend:

```text
RestaurantRequest DTO
```

---

# Why No ID Field?

Restaurant ID is database-generated.

Frontend should not generate system identifiers.

---

# Why No Active Field?

Backend should control operational status.

Typically:

```text
new restaurant → active = true
```

---

# MenuItemForm

Purpose:

```text
Configure restaurant menu items
```

Fields:

```text
restaurantId
itemName
price
available
```

Maps to backend:

```text
MenuItemRequest DTO
```

---

# Why restaurantId Instead of Restaurant Object?

Frontend only knows selected restaurant ID.

Backend converts:

```text
restaurantId → Restaurant entity
```

through service layer.

---

# OrderForm

Purpose:

```text
Place customer orders
```

Fields:

```text
restaurantId
items[]
    menuItemId
    quantity
```

Maps to backend:

```text
OrderRequest
↓
OrderItemRequest
```

---

# Why Nested Item Structure?

An order can contain multiple items.

Example:

```json
{
  "restaurantId": 1,
  "items": [
    {
      "menuItemId": 1,
      "quantity": 2
    },
    {
      "menuItemId": 2,
      "quantity": 1
    }
  ]
}
```

---

# Why Frontend Does Not Send Price?

Pricing must be controlled by backend.

Reason:

```text
Frontend can be manipulated.
```

Backend fetches actual price from database.

This prevents price tampering.

---

# PaymentForm

Purpose:

```text
Validate payment
```

Fields:

```text
orderId
gatewayOrderId
gatewayPaymentId
signature
paymentSuccess
```

Maps to backend:

```text
PaymentValidationRequest DTO
```

---

# Why orderId Is Required?

Payment happens after order creation.

So payment must attach to an existing order.

---

# Why gateway IDs Are Separate?

System distinguishes between:

| ID Type | Owner |
|---|---|
| orderId | Internal database |
| gatewayOrderId | Payment gateway |
| gatewayPaymentId | Payment gateway |

This separation reflects real-world payment architecture.

---

# DeliveryUpdateForm

Purpose:

```text
Update delivery tracking
```

Fields:

```text
orderId
deliveryPartnerName
trackingNumber
deliveryStatus
```

Maps to backend:

```text
DeliveryUpdateRequest DTO
```

---

# Why trackingNumber Is String?

Tracking IDs may contain:

```text
TRK12345
DLV-8899
SHIP_001
```

So String is preferred over numeric types.

---

# StatsCard Component

Purpose:

```text
Display operational KPIs
```

Examples:

```text
Total Restaurants
Pending Orders
Failed Payments
Delivered Orders
```

This simulates dashboard analytics widgets.

---

# State Management Design

Current state management uses:

```js
useState()
```

Reason:

- prototype simplicity
- low application complexity
- fast development
- easier debugging

---

# Planned API Layer

Future architecture:

```text
Frontend Form
↓
Axios API Layer
↓
Spring Boot REST APIs
↓
DTO Validation
↓
Service Layer
↓
Database
```

Example:

```js
axios.post("/restaurants", payload)
```

---

# Current Frontend Status

Completed:

- routing
- role-based UI separation
- protected routes
- admin dashboard
- restaurant owner dashboard
- customer website
- onboarding forms
- order forms
- payment forms
- delivery forms
- mock authentication
- navbar navigation

---

# Planned Next Steps

## Backend Integration

- connect React forms to Spring Boot APIs
- add Axios API layer
- handle API responses

---

## JWT Authentication

Replace mock localStorage role system with:

- JWT token generation
- token validation
- backend authorization

---

## UI Improvements

- responsive styling
- dashboard cards
- order tables
- toast notifications
- loading states

---

# Production vs Prototype Decisions

| Area | Prototype | Production |
|---|---|---|
| Authentication | localStorage role | JWT/OAuth |
| State Management | useState | Redux/Context |
| Styling | Basic | Design system |
| API Layer | Planned | Fully integrated |
| Dashboard Stats | Static | Real-time |
| Payment | Simulated | Actual gateway |
| Delivery | Manual updates | Partner integrations |
| Customer Website | Local route | Hosted tenant domain |

---

# Final Architectural Understanding

This frontend was designed not as a simple food ordering UI, but as a simplified SaaS onboarding and restaurant operations platform.

The frontend architecture mirrors real-world systems where:

```text
Platform Admins onboard restaurants
↓
Restaurant owners manage operations
↓
Customers interact through public storefronts
```

The design intentionally separates:
- onboarding workflows
- operational workflows
- customer workflows

to simulate real enterprise multi-role architecture.
````
