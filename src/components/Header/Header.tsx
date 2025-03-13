import { ReactNode } from "react";
import "./Header.css";

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

function Header({ children, className }: HeaderProps) {
  return <header className={className}>{children}</header>;
}

export default Header;
