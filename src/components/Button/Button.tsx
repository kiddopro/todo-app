import "./Button.css";

interface ButtonProps {
  label: string;
  btnClass?: string;
}

function Button({ ...props }: ButtonProps) {
  const { label, btnClass } = props;
  return <button className={btnClass}>{label}</button>;
}

export default Button;
