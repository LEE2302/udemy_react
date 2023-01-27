import React from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

//화살표 함수로도 가능 강의자 개인적으로 선호 짧기때문
//그냥 여러가지로 된다정도만 알고 개인이 편한걸로 쓰면됨.
//const App = () => {...안에 내용들}
function App() {
  //정보들
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  //** 예전 리액트 사용법이면서 JSX문법이 내부에서는 이런식으로 변환이 되어 html로 보내진다.
  //그렇기 때문에 JSX문법에서 항상 부모요소가 있어야 하는 이유도 아래와 같이 부모없이 동일한 위치에 2개 이상이 안되기 때문에 부모요소안에 자식요소가 여러개가 가능하기 떄문이다.**
  //예전 리액트 프로젝트를 보면 이런식으로 많이 써있고 import도 import React form 'react';를 매 컴포넌트 파일마다 해줬어야했고 많이 보일거다.
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "let's get started!"),
  //   React.createElement(Expenses, { items: expense })
  // );

  //JSX문법
  return (
    <div>
      <NewExpense />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
