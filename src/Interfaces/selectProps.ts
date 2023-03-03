import Category from "./Category";
import { ChangeEventHandler } from "react";
import months from "./months";

interface selectProps {
  options: Array<Category> | Array<months>;
  placeholder: string;
  onChangeHandler: ChangeEventHandler<HTMLSelectElement>;
}

export default selectProps;
