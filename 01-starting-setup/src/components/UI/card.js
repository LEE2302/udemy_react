import "./card.css";

function Card(props) {
  //children props개념
  //변수를 선언하고 card클래스 띄어쓰고 props.className을 설정한것
  //=> 만약 pops.className이  className="expenses"이런식으로 Expenses.js에서 인수로 받아온다면
  //=> className = 'card expenses' 이런식으로 클래스가 두개가 된것이다. 클래스는 띄어쓰기로 여러개를 구분하여 선언가능. css셀렉터 개념
  //그러므로 동일한 css는 card로 각자 필요한 클래스는 props.className으로 받는것이다.
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
