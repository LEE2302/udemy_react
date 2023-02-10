import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  //maxvalue값을 구하기
  const dataPointValue = props.chartData.map((el) => el.value);
  console.log(dataPointValue);
  //dataPoinValue는 배열이기 때문에 스프레드연산자를 이용해 나열을 해준다.
  const maxDataValue = Math.max(...dataPointValue);
  console.log(maxDataValue);

  return (
    <div className="chart">
      {props.chartData.map((el) => (
        <ChartBar
          // 맵핑을 해줄때는 키값이 필요한데 지금 label로 준 이유는
          // label값이 월(1월,2월 ...)이라 애초에 고유한 값이기 때문에 겸사 겸사 한것
          key={el.label}
          value={el.value}
          maxvalue={maxDataValue}
          label={el.label}
        />
      ))}
    </div>
  );
};

export default Chart;
