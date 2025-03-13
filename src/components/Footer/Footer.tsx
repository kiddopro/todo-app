import { ReactNode } from "react";
import "./Footer.css";

interface FooterProps {
  footerClass?: string;
  children: ReactNode;
}

export const Footer = ({ ...props }: FooterProps) => {
  const { children, footerClass } = props;
  return <footer className={footerClass}>{children}</footer>;
};
