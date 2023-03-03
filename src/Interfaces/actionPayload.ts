interface actionPayload {
  type:
    | "ADD-TRANSACTION"
    | "REMOVE-TRANSACTION"
    | "ADD-CATEGORY"
    | "REMOVE-CATEGORY"
    | "SET-BUDGET"
    | "ADJUST-CATEGORY";
  id?: string;
  date?: Date;
  title?: string;
  categoryTitle?: string;
  amount?: Number;
  maxBudget?: Number;
}

export default actionPayload;
