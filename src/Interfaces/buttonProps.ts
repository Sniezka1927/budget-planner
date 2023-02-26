import { MouseEventHandler } from "react";

interface buttonProps {
  children: React.ReactNode;
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
}
export default buttonProps;
