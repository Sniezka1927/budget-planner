import Category from "./Category";
import { ChangeEventHandler } from "react";

interface selectProps {
  options: Array<Category>;
  placeholder: string;
  onChangeHandler: ChangeEventHandler<HTMLSelectElement>;
}

export default selectProps;
