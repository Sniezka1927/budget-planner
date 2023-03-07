import Transaction from "./Transaction";
import Category from "./Category";
interface defaultState {
  transactions: Array<Transaction>;
  categories: Array<Category>;
  budget: number;
  spent: number;
  remaining: number;
}

export default defaultState;
