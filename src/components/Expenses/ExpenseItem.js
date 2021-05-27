// React library related
import { useState } from "react";

// CSS
import "./ExpenseItem.css";

// Components
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Mis à jour");
    console.log(title);
  };

  return (
    // <div className="expense-item">
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__desciption">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount} €</div>
        <button onClick={clickHandler}>COUCOU</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
