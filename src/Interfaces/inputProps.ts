import { ChangeEventHandler } from "react";

interface inputProps {
  type: string;
  value?: string | number | undefined;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

export default inputProps;
