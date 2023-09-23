import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../Ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart"

function Expenses(props) {
  const [filteredyear, setFilteredyear] = useState("2022");

  const filterChangeHandler = (selectedyear) => {
    setFilteredyear(selectedyear);
  };

  const FilteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });

  // console.log("FilteredExpenses.length:", FilteredExpenses.length);
  let expensesContent=<p>No expense found.</p>
  if (FilteredExpenses.length > 0 )
  {
    expensesContent= FilteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
    ))
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredyear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={FilteredExpenses}/>
        <ExpensesList items={FilteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
