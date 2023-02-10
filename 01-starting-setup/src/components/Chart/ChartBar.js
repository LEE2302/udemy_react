import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  //차트바에 게이지(fill)을 채워야 하는 변수 선언
  let barFillHeight = "0%";
  //max를 100으로 정해준다면 맥스밸류값에 의해 게이지가 올라가야 하기 때문에
  //조건으로 0보다 크면을 준다
  if (props.maxvalue > 0) {
    //밸류값이 0보다 크다면 반올림으로 밸류값 나누기 맥스밸류값을 해주고 퍼센트로 만들어야하기 때문에
    //100으로 곱해주어 백분율 퍼센트를 만들어준다. 퍼센트 문자열을 만들어주기위해 + '%'까지
    barFillHeight = Math.round((props.value / props.maxvalue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* 리액트에서 스타일 동적으로 변경하기 */}
        <div
          className="chart-bar__fill"
          // html기본 문법이지만 리액트 에서는 style선언후 중괄호 두개안에다가 넣게된다
          // 그리고 백그라운드 변경처럼 중간에 - 들어가게 된다면 카멜케이스로 하던지 ''로 감싸주어야한다.
          // ex) 'background-color' : red / backgroundColor : red
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
