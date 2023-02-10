import React, { useState } from "react";
import Card from "../UI/card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  //useState 를 이용하는 방법 1
  // const [year, setYear] = useState("2019");

  //강의에서 나오는 함수를 이용하는 방법 2
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log(filteredYear);
    console.log(selectedYear);
  };

  //필터를 통하여 년도에 맞는 아이템만 보이게
  const filteredExpenses = props.items.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear;
  });
  // console.log(props.items[0].date.getFullYear().toString());

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
        {/* 변수를 이용한 예제 */}
        <ExpensesList items={filteredExpenses} />
        {/* 삼항연산자를 이용한 예제 */}
        {/* {filteredExpenses.length === 0 ? (
          <p>목록이 없습니다.</p>
        ) : (
          filteredExpenses.map((el) => (
            <ExpenseItem
              key={el.id}
              title={el.title}
              amount={el.amount}
              date={el.date}
            />
          ))
        )} */}
        {/* 하드코딩한 예제 */}
        {/* <ExpenseItem
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
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;
