import React from "react";

import classes from "./MealItem.module.css";

const OrderItems = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.city}</div>
        <div className={classes.description}>{props.postalCode}</div>
        <div className={classes.description}>{props.street}</div>
      </div>
      <div></div>
    </li>
  );
};

export default OrderItems;
