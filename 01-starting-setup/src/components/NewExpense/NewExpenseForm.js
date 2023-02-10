import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmont, setEnteredAmont] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //useState 한개로 여러개 정의하하는 방법
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmont: "",
  //     enteredDate: "",
  //   });

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);

    // 대체 방법1
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //이전 상태에 의존해야 할때 방법
    // setUserInput((prev) => {
    //   return { ...prev, enteredTitle: event.target.value };
    // });
  }

  function amontChangeHandler(event) {
    setEnteredAmont(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmont: event.target.value,
    // });
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmont,
      date: new Date(enteredDate),
    };
    // console.log(expenseDate);
    // props.onExpenseDate(expenseDate);
    props.onSaveExpenseDate(expenseDate);
    setEnteredTitle("");
    setEnteredAmont("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amont</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmont}
            onChange={amontChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* Cancel 버튼은 props로 상태 관리를 받아오기 
        이유: 다시 취소를 누르면 부모컴포넌트에서 상태가 변경이 되니깐*/}
        <button type="button" onClick={props.cancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
