import { ChangeEventHandler } from "react";

interface inputProps {
  type: string;
  value?: string | Number | any;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

export default inputProps;
