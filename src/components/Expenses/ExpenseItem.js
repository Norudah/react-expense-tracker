// CSS
import "./ExpenseItem.css";

// Components
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";

const ExpenseItem = (props) => {
  return (
    // <div className="expense-item">
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__desciption">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} €</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
