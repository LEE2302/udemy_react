import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date();
  const expenseTitel = "자동차 보험";
  const expenseAmount = 1 + "만원";

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitel}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
