import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleInputHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountInputHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateInputHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const addExpenseHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(newExpense);

    props.onSaveExpenseData(newExpense);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={addExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Titre</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Montant</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountInputHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateInputHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Ajouter</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
