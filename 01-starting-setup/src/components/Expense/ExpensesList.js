import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  //조건을 통하여 년도에 맞게 표시하기 없으면 목록이 없다고 표시
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">목록이 없습니다.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
