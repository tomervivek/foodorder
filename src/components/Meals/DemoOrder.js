import { useEffect, useState } from "react";

import Card from "../UI/Card";
import OrderItems from "./MealItem/OrderItems";
import classes from "./AvailableMeals.module.css";

const DemoOrder = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(
        "https://react-http-52341-default-rtdb.firebaseio.com/orders.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedOrders = [];

      for (const key in responseData) {
        loadedOrders.push({
          name: responseData[key.user].name,
          city: responseData[key.user].city,
          price: responseData[key.user].postalCode,
          street: responseData[key.user].street,
        });
      }

      setOrders(loadedOrders);
      setIsLoading(false);
    };

    fetchOrders().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const ordersList = orders.map((order) => (
    <OrderItems
      name={order.name}
      city={order.city}
      postalCode={order.postalCode}
      street={order.street}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{ordersList}</ul>
      </Card>
    </section>
  );
};

export default DemoOrder;
