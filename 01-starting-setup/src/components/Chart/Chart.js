import React from "react";
import "./ChartBar.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="Chart">
      {props.items.map((el) => (
        <ChartBar
          // 맵핑을 해줄때는 키값이 필요한데 지금 label로 준 이유는
          // label값이 월(1월,2월 ...)이라 애초에 고유한 값이기 때문에 겸사 겸사 한것
          key={el.label}
          value={el.value}
          maxvalue={null}
          label={el.label}
        />
      ))}
    </div>
  );
};

export default Chart;
