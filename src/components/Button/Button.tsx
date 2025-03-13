import { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  children: ReactNode;
  btnClass?: string;
}

function Button({ ...props }: ButtonProps) {
  const { children, btnClass } = props;
  return <button className={btnClass}>{children}</button>;
}

export default Button;
