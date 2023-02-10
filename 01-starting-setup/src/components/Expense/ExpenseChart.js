import React from "react";

import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  // Chart로 프롭스를 넘겨줄때 넘겨 받을 데이터를 정했기 때문에 label속성과 value속성을 넘겨준다.
  const chartDataPoint = [
    { label: "1월", value: 0 },
    { label: "2월", value: 0 },
    { label: "3월", value: 0 },
    { label: "4월", value: 0 },
    { label: "5월", value: 0 },
    { label: "6월", value: 0 },
    { label: "7월", value: 0 },
    { label: "8월", value: 0 },
    { label: "9월", value: 0 },
    { label: "11월", value: 0 },
    { label: "12월", value: 0 },
  ];
  console.log(chartDataPoint);
  for (let data of props.filterData) {
    const month = data.date.getMonth();
    chartDataPoint[month].value += data.amount;
  }

  return <Chart chartData={chartDataPoint} />;
};

export default ExpenseChart;
