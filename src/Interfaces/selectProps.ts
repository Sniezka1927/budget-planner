import Category from "./Category";
import { ChangeEventHandler } from "react";
import months from "./months";
import years from "./years";

interface selectProps {
  options: Array<Category> | Array<months> | Array<years>;
  placeholder: string;
  onChangeHandler: ChangeEventHandler<HTMLSelectElement>;
}

export default selectProps;
