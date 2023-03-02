import Transaction from "./Transaction";
import Category from "./Category";

interface BudgetContextType {
  transactions: Array<Transaction>;
  categories: Array<Category>;
  budget: Number;
  spent: Number;
  remaining: Number;
  addTransaction: (
    date: Date,
    title: string,
    category: string,
    amount: Number
  ) => void;
  removeTransaction: (id: string) => void;
  addCategory: (title: string, maxBudget: Number) => void;
  removeCategory: (id: string) => void;
  setBudget: (budget: Number) => void;
}

export default BudgetContextType;
