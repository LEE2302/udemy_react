import React, { useState } from "react";
import Card from "../UI/card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  //useState 를 이용하는 방법 1
  // const [year, setYear] = useState("2019");

  //강의에서 나오는 함수를 이용하는 방법 2
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log(filteredYear);
    // console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        {/* useStat를 이용하는 방법 1 */}
        {/* <ExpensesFilter year={year} setYear={setYear} /> */}
        {/* 강의에서 나오는 함수를 이용하는 방법 2 */}
        <ExpensesFilter
          selected={filteredYear}
          onChahgeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
