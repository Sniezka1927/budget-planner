import styles from "./Budget.module.css";
import { useContext } from "react";
import BudgetContext from "../../context/budget-context";
const Budget = () => {
  const budgetCtx = useContext(BudgetContext);
  return (
    <div className={styles.container}>
      <span>Budget: {String(budgetCtx.budget)}$</span>
    </div>
  );
};
export default Budget;
