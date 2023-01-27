import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amont}</div>
      </div>
      <button onClick={clickHandler}>Change Title!</button>
    </Card>
  );
}

export default ExpenseItem;
