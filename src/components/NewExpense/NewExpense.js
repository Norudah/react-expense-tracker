import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (newExpense) => {
    const expense = {
      ...newExpense,
      id: Math.random(),
    };
    props.onAddExpense(expense);
  };

  const startEditing = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Rentrer une new</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStopEditing={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
