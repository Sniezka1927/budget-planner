import React from "react";
import expenseProps from "../../Interfaces/expenseProps";
import Expense from "./Expense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    amount: 29.0,
    date: new Date(2023, 10, 10),
    title: "New TV",
  },
  {
    id: "2",
    amount: 425.0,
    date: new Date(2023, 11, 11),
    title: "New Boots",
  },
  {
    id: "182731273123",
    amount: 4500,
    date: new Date(2023, 12, 12),
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
            date={expenseItem.date}
          />
        );
      })}
    </ul>
  );
};

export default Expenses;
