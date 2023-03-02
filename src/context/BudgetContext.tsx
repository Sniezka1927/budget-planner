import { createContext } from "react";
import BudgetContextType from "../Interfaces/budgetContextType";

const BudgetContext = createContext<BudgetContextType>({
  transactions: [],
  categories: [],
  budget: 0,
  spent: 0,
  remaining: 0,
  addTransaction: () => {},
  removeTransaction: () => {},
  addCategory: () => {},
  removeCategory: () => {},
  setBudget: () => {},
});

export default BudgetContext;
