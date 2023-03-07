import Transaction from "./Transaction";
import Category from "./Category";

interface BudgetContextType {
  transactions: Array<Transaction>;
  categories: Array<Category>;
  budget: number;
  spent: number;
  remaining: number;
  addTransaction: (
    date: Date,
    title: string,
    category: string,
    amount: number
  ) => void;
  removeTransaction: (id: string) => void;
  addCategory: (title: string, maxBudget: number) => void;
  removeCategory: (id: string) => void;
  setBudget: (budget: number) => void;
  updateCategory: (id: string, title: string, amountDedicated: number) => void;
}

export default BudgetContextType;
