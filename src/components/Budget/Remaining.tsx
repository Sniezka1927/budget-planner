import BudgetContext from "../../context/BudgetContext";
import styles from "./Remaining.module.css";
import { useContext } from "react";
const Remaining = () => {
  const budgetContext = useContext(BudgetContext);
  return (
    <div className={styles.container}>
      <span>Remaining: {JSON.stringify(budgetContext.remaining)}$</span>
    </div>
  );
};

export default Remaining;
