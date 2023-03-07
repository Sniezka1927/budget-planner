import BudgetContext from "../../context/budget-context";
import styles from "./Remaining.module.css";
import { useContext } from "react";
const Remaining = () => {
  const budgetContext = useContext(BudgetContext);
  return (
    <div className={styles.container}>
      <span>Remaining: {String(budgetContext.remaining)}$</span>
    </div>
  );
};

export default Remaining;
