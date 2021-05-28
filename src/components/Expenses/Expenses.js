import { useState } from "react";

import "./Expenses.css";

import Card from "../Card/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenseFilterHandler = (year) => setFilteredYear(year);

  const filteredExpenses = props.expenses.filter((el) => {
    const expenseYear = el.date.getFullYear();
    return expenseYear.toString() === filteredYear.toString();
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          year={filteredYear}
          onExpenseFilter={expenseFilterHandler}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
