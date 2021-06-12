import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import Logout from "./Logout";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>YourMeals</h1>
        <div className={classes.button}>
          <HeaderCartButton onClick={props.onShowCart} />
          <Logout />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
