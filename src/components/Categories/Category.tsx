import categoryProps from "../../Interfaces/categoryProps";
import styles from "./Category.module.css";
import { TiDelete as Icon } from "react-icons/ti";
import { useContext, useState } from "react";
import BudgetContext from "../../context/budget-context";
import Button from "../UI/Button";
import Input from "../UI/Input";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
const Category = (props: categoryProps) => {
  const budgetCtx = useContext(BudgetContext);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [categoryTitle, setCategoryTitle] = useState<string>(props.title);

  const [amountDedicated, setAmountDedicated] = useState<number>(
    props.maxBudget
  );

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryTitle(e.target.value);
  };

  const dedicatedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountDedicated(Number(e.target.value));
  };

  const removeHandler = () => {
    budgetCtx.removeCategory(props.id);
  };

  const editHandler = () => {
    setIsEditing(true);
  };
  const saveHandler = () => {
    budgetCtx.updateCategory(props.id, categoryTitle, amountDedicated);
    setIsEditing(false);
  };
  return (
    <React.Fragment>
      <ListGroup.Item className={styles.listItemTitle}>
        {isEditing ? (
          <Input
            onChangeHandler={titleHandler}
            type="text"
            placeholder="write name of the category"
            value={categoryTitle}
          ></Input>
        ) : (
          <span className={styles.title}>{props.title}</span>
        )}
      </ListGroup.Item>
      <ListGroup.Item className={styles.listItem}>
        <span className={styles.amount}>${String(props.totalSpend)}</span>
      </ListGroup.Item>
      <ListGroup.Item className={styles.listItem}>
        <span className={styles.amount}>${String(props.amountLeft)}</span>
      </ListGroup.Item>
      <ListGroup.Item className={styles.listItem}>
        {isEditing ? (
          <Input
            onChangeHandler={dedicatedHandler}
            type="number"
            placeholder="write amount dedicated to this category"
            value={amountDedicated}
          ></Input>
        ) : (
          <span className={styles.amount}>${String(props.maxBudget)}</span>
        )}
      </ListGroup.Item>
      <ListGroup.Item className={styles.listItem}>
        {!isEditing ? (
          <Button onClickHandler={editHandler}>Edit</Button>
        ) : (
          <Button onClickHandler={saveHandler}>Save</Button>
        )}
      </ListGroup.Item>
      <ListGroup.Item className={styles.listItemBin}>
        <div className={styles.bin} onClick={removeHandler}>
          <Icon size={"1.5rem"} />
        </div>
      </ListGroup.Item>
    </React.Fragment>
  );
};

export default Category;
