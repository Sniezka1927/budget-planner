import styles from "./Budget.module.css";
import { useContext } from "react";
import BudgetContext from "../../context/budget-context";
const Budget = () => {
  const budgetContext = useContext(BudgetContext);
  return (
    <div className={styles.container}>
      <span>Budget: {JSON.stringify(budgetContext.budget)}$</span>
    </div>
  );
};
export default Budget;
