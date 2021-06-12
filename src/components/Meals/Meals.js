import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import DemoOrder from "./DemoOrder";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
      <DemoOrder />
    </Fragment>
  );
};

export default Meals;
