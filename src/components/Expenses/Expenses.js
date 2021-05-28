import { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
import ExpenseFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenseFilterHandler = (year) => {
    console.log(year);
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          year={filteredYear}
          onExpenseFilter={expenseFilterHandler}
        />
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
