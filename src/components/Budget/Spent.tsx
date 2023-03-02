import BudgetContext from "../../context/BudgetContext";
import styles from "./Spent.module.css";
import { useContext } from "react";
const Spent = () => {
  const budgetContext = useContext(BudgetContext);
  return (
    <div className={styles.container}>
      <span>Spent: {JSON.stringify(budgetContext.spent)}$</span>
    </div>
  );
};
export default Spent;
