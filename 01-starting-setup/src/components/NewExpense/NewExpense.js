import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  //버튼 상태관리
  const [isEditing, setIsEditing] = useState(false);
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
    setIsEditing(false);
  };

  //버튼(Add New Expense) 클릭시 화면 나타나게
  const clickHander = () => {
    setIsEditing(true);
  };

  //버튼(Cancel) 클릭시 add new expense 버튼 나타나게
  const cancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {/* 논리곱&&은 두개가 트루면 트루라는 공식을 이용하여
      1. 앞에가 트루(트루값,트루시한값)면 뒤에 것을 실행(함수라면 함수가 실행 변수면 변수가 실행)하는 것이고 
      2. 만약 앞에가 거짓(펄스값,펄시한값)이라면 뒤에는 실행이 안된다.*/}
      {!isEditing && <button onClick={clickHander}>Add New Expense</button>}
      {/* <NewExpenseForm onExpenseDate={saveNewExpenseDate} /> */}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseDate={saveExpenseDataHandler}
          cancelHandler={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
