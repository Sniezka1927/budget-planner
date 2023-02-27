import React from "react";
import Expense from "./Expense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    amount: 29.0,
    date: new Date(2023, 10, 10),
    title: "New TV",
    category: "Home",
  },
  {
    id: "2",
    amount: 425.0,
    date: new Date(2023, 11, 11),
    title: "New Boots",
    category: "Needs",
  },
  {
    id: "182731273123",
    amount: 4500,
    date: new Date(2023, 12, 12),
    category: "Needs",
    title: "New PC",
  },
];
const Expenses = () => {
  return (
    <ul className="list-group">
      {DUMMY_EXPENSES.map((expenseItem) => {
        return (
          <Expense
            key={expenseItem.id}
            id={expenseItem.id}
            amount={expenseItem.amount}
            title={expenseItem.title}
            category={expenseItem.category}
            date={expenseItem.date}
          />
        );
      })}
    </ul>
  );
};

export default Expenses;
