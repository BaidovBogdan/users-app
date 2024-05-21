import { ButtonProps } from "./interfaceForBtn";
import "./button.module.css";

// Файл компоненты с большой буквы

export default function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
