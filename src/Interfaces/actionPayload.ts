interface actionPayload {
  type: string;
  id?: string;
  date?: Date;
  title?: string;
  categoryTitle?: string;
  amount?: Number;
  maxBudget?: Number;
}

export default actionPayload;
