import React, { useState } from "react";

import "./ExpensesFilter.css";
// useState를 이용하는 방법 1 //구조분해 할당이용
// const ExpensesFilter = ({ year, setYear }) => {
//강의에서 나오는 함수를 이용한 방법2 //구조분해 할당이용
const ExpensesFilter = ({ onChahgeFilter, selected }) => {
  //useState 를 이용한 방법 1
  // const dropdownChangeHandler = (event) => {
  //   setYear(event.target.value);
  // };

  //강의에서 나오는 함수를 이용한 방법 2
  const dropdownChangeHandler = (event) => {
    onChahgeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
