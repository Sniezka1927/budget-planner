import BudgetContext from "../../context/budget-context";
import styles from "./Spent.module.css";
import { useContext } from "react";
const Spent = () => {
  const budgetContext = useContext(BudgetContext);
  return (
    <div className={styles.container}>
      <span>Spent: {String(budgetContext.spent)}$</span>
    </div>
  );
};
export default Spent;
