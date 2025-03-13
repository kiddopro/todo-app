import { ReactNode } from "react";
import "./Header.css";

interface HeaderProps {
  children: ReactNode;
  headerClass?: string;
}

function Header({ children, headerClass }: HeaderProps) {
  return <header className={headerClass}>{children}</header>;
}

export default Header;
