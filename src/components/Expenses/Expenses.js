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
        <ExpenseItem
          title={props.expenses[0].title}
          date={props.expenses[0].date}
          amount={props.expenses[0].amount}
        />
      </Card>
    </div>
  );
};

export default Expenses;
