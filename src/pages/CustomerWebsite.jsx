import { useParams } from "react-router-dom";
import OrderForm from "../components/OrderForm";
import PaymentForm from "../components/PaymentForm";

function CustomerWebsite() {
  const { restaurantSlug } = useParams();

  return (
    <div>
      <h1>{restaurantSlug}</h1>
      <p>Customer Ordering Website</p>

      <hr />

      <OrderForm />

      <hr />

      <PaymentForm />
    </div>
  );
}

export default CustomerWebsite;
