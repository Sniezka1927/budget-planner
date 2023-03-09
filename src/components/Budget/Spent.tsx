import BudgetContext from "../../context/budget-context";
import styles from "./Spent.module.css";
import { useContext } from "react";
const Spent = () => {
  const budgetCtx = useContext(BudgetContext);
  return (
    <div className={styles.container}>
      <span>Spent: {String(budgetCtx.spent)}$</span>
    </div>
  );
};
export default Spent;
