import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  // function saveNewExpenseDate(data) {
  //   const saveData = {
  //     ...data,
  //     id: Math.random().toString(),
  //   };
  //   // console.log(data);
  //   // console.log(saveData);
  //   props.saveExpenseDate(saveData);
  // }

  const saveExpenseDataHandler = (enterdeExpenseData) => {
    const expenseData = {
      ...enterdeExpenseData,
      id: Math.random().toString(),
    };
    console.log(enterdeExpenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* <NewExpenseForm onExpenseDate={saveNewExpenseDate} /> */}
      <NewExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
