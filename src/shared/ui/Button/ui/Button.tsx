import { FC } from "react";
import { ButtonProps } from "../types";

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
