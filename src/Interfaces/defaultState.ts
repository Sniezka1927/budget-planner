import Transaction from "./Transaction";
import Category from "./Category";
interface defaultState {
  transactions: Array<Transaction>;
  categories: Array<Category>;
  budget: Number;
  spent: Number;
  remaining: Number;
}

export default defaultState;
