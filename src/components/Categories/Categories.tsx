import Category from "./Category";
import React, { useContext } from "react";
import BudgetContext from "../../context/budget-context";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./Category.module.css";
const Categories = () => {
  const budgetContext = useContext(BudgetContext);
  return (
    <React.Fragment>
      {window.innerWidth > 768 ? (
        <ListGroup horizontal={"sm"} className="my-2">
          <ListGroup.Item className={styles.listItemTitle}>
            Title
          </ListGroup.Item>
          <ListGroup.Item className={styles.listItem}>
            Total Spend
          </ListGroup.Item>
          <ListGroup.Item className={styles.listItem}>
            Amount Left
          </ListGroup.Item>
          <ListGroup.Item className={styles.listItem}>
            Amount dedicated
          </ListGroup.Item>
          <ListGroup.Item className={styles.listItem}></ListGroup.Item>
          <ListGroup.Item className={styles.listItemBin}></ListGroup.Item>
        </ListGroup>
      ) : null}
      {budgetContext.categories.map((categoryItem) => {
        return (
          <ListGroup horizontal={"sm"} className="my-2" key={categoryItem.id}>
            <Category
              id={categoryItem.id}
              title={categoryItem.title}
              maxBudget={categoryItem.maxBudget}
              totalSpend={categoryItem.totalSpend}
              amountLeft={categoryItem.amountLeft}
            />
          </ListGroup>
        );
      })}
    </React.Fragment>
  );
};

export default Categories;
