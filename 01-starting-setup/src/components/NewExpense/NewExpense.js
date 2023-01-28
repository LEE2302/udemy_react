import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  function saveExpenseDate(매개변수) {
    const 새로운객체 = {
      ...매개변수,
      id: Math.random().toString(),
    };
    console.log(매개변수);
    console.log(새로운객체);
    props.appJS변수(새로운객체);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseDate={saveExpenseDate} />
    </div>
  );
};

export default NewExpense;
