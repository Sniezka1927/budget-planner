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
  // setMyData: (data: string) => void;
}

export interface Transaction {
  id: string;
  amount: number;
  title: string;
  category: string;
  date: Date;
}

export interface Category {
  id: string;
  title: string;
  maxBudget: number;
  totalSpend: number;
  amountLeft: number;
}

export default BudgetContextType;
