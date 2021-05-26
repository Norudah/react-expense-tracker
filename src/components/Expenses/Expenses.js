import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
      />
    </Card>
  );
};

export default Expenses;
