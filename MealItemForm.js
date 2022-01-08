import React from "react";
import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <input type="text" placeholder="Amount" value="" />
       <button className={classes["form button"]}>+Add</button>
    </form>
  );
};

export default MealItemForm;
