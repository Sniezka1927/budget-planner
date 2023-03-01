import BudgetContextType from "../Interfaces/budgetContextType";
import budgetProvider from "../Interfaces/budgetProvider";
import BudgetContext from "./BudgetContext";
import { useReducer } from "react";
import defaultState from "../Interfaces/defaultState";
import Category from "../Interfaces/Category";
// import actionPayload from "../Interfaces/actionPayload";
import Transaction from "../Interfaces/Transaction";

const defaultBudgetState: defaultState = {
  transactions: [
    {
      id: "1",
      amount: 29.0,
      date: new Date(2023, 10, 10),
      title: "New TV",
      categoryTitle: "Home",
    },
    {
      id: "2",
      amount: 425.0,
      date: new Date(2023, 11, 11),
      title: "New Boots",
      categoryTitle: "Needs",
    },
    {
      id: "3",
      amount: 4500,
      date: new Date(2023, 12, 12),
      categoryTitle: "Needs",
      title: "New PC",
    },
  ],
  categories: [
    {
      id: JSON.stringify(~~(Math.random() * 100000)),
      title: "Shopping",
      maxBudget: 500,
      totalSpend: 0,
      amountLeft: 500,
    },
    {
      id: JSON.stringify(~~(Math.random() * 100000)),
      title: "Home",
      maxBudget: 500,
      totalSpend: 0,
      amountLeft: 500,
    },
    {
      id: JSON.stringify(~~(Math.random() * 100000)),
      title: "Car & Transport",
      maxBudget: 500,
      totalSpend: 0,
      amountLeft: 500,
    },
    {
      id: JSON.stringify(~~(Math.random() * 100000)),
      title: "Activities and Travels",
      maxBudget: 500,
      totalSpend: 0,
      amountLeft: 500,
    },
    {
      id: JSON.stringify(~~(Math.random() * 100000)),
      title: "Finance",
      maxBudget: 500,
      totalSpend: 0,
      amountLeft: 500,
    },
    {
      id: JSON.stringify(~~(Math.random() * 100000)),
      title: "Needs",
      maxBudget: 500,
      totalSpend: 0,
      amountLeft: 500,
    },
  ],
  budget: 2000,
  spent: 0,
  remaining: 2000,
  /*
  addTransaction: () => {},
  removeTransaction: () => {},
  addCategory: () => {},
  removeCategory: () => {},
  */
};

const budgetReducer = (
  state: any /*defaultState*/,
  action: any /*actionPayload*/
) => {
  if (action.type === "ADD-TRANSACTION") {
    console.log(action);
    const selectedCategory = state.categories.find(
      (cat: Category) => cat.title === action.categoryTitle
    );
    console.log(selectedCategory);
    selectedCategory.maxBudget -= action.amount;
    selectedCategory.totalSpend += action.amount;
    selectedCategory.amountLeft -= action.amount;
    const transactions = [
      {
        id: JSON.stringify(~~(Math.random() * 10000)),
        amount: action.amount,
        date: action.date,
        categoryTitle: action.categoryTitle,
        title: action.title,
      },
      ...state.transactions,
    ];
    return {
      transactions: transactions,
      categories: state.categories,
      budget: state.budget,
      spent: state.spent,
      remaining: state.remaining,
    };
  } else if (action.type === "REMOVE-TRANSACTION") {
    const selectedTransaction = state.transactions.find(
      (trans: Transaction) => trans.id === action.id
    );
    const updatedCategory = state.categories.find(
      (cat: Category) => cat.title === selectedTransaction.categoryTitle
    );
    updatedCategory.maxBudget += selectedTransaction.amount;
    updatedCategory.totalSpend -= selectedTransaction.amount;
    updatedCategory.amountLeft += selectedTransaction.amount;
    const updatedTransactions = state.transactions.filter(
      (trans: Transaction) => trans.id !== selectedTransaction.id
    );
    return {
      transactions: updatedTransactions,
      categories: state.categories,
      budget: state.budget,
      spent: state.spent,
      remaining: state.remaining,
    };
  } else if (action.type === "ADD-CATEGORY") {
    const categories = [
      {
        id: JSON.stringify(~~(Math.random() * 100000)),
        title: action.title,
        maxBudget: action.maxBudget,
        totalSpend: 0,
        amountLeft: action.maxBudget,
      },
      ...state.categories,
    ];
    return {
      transactions: state.transactions,
      categories: categories,
      budget: state.budget,
      spent: state.spent,
      remaining: state.remaining,
    };
  } else if (action.type === "REMOVE-CATEGORY") {
    const categories = state.categories.filter(
      (cat: Category) => cat.id !== action.id
    );
    return {
      transactions: state.transactions,
      categories: categories,
      budget: state.budget,
      spent: state.spent,
      remaining: state.remaining,
    };
  }

  // if any block catched return default values to prevent errors
  return {
    transactions: state.transactions,
    categories: state.categories,
    budget: state.budget,
    spent: state.spent,
    remaining: state.remaining,
  };
};

const BudgetContextProvider = (props: budgetProvider) => {
  const [budgetState, dispatchBudgetAction] = useReducer(
    budgetReducer,
    defaultBudgetState
  );

  const addTransactionHandler = (
    date: Date,
    title: string,
    categoryTitle: string,
    amount: Number
  ) => {
    dispatchBudgetAction({
      type: "ADD-TRANSACTION",
      date: date,
      title: title,
      categoryTitle: categoryTitle,
      amount: amount,
    });
  };

  const removeTransactionHandler = (id: string) => {
    dispatchBudgetAction({
      type: "REMOVE-TRANSACTION",
      id: id,
    });
  };

  const addCategoryHandler = (title: string, maxBudget: Number) => {
    dispatchBudgetAction({
      type: "ADD-CATEGORY",
      title: title,
      maxBudget: maxBudget,
    });
  };

  const removeCategoryHandler = (id: string) => {
    dispatchBudgetAction({
      type: "REMOVE-CATEGORY",
      id: id,
    });
  };

  const budgetContext: BudgetContextType = {
    transactions: budgetState.transactions,
    categories: budgetState.categories,
    budget: budgetState.budget,
    spent: budgetState.spent,
    remaining: budgetState.remaining,
    addTransaction: addTransactionHandler,
    removeTransaction: removeTransactionHandler,
    addCategory: addCategoryHandler,
    removeCategory: removeCategoryHandler,
  };
  return (
    <BudgetContext.Provider value={budgetContext}>
      {props.children}
    </BudgetContext.Provider>
  );
};

export default BudgetContextProvider;
