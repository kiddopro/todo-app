import "./Button.css";

interface ButtonProps {
  label: string;
  btnClass?: string;
  onClick?: () => void;
}

function Button({ ...props }: ButtonProps) {
  const { label, btnClass, onClick } = props;
  return (
    <button onClick={onClick} className={btnClass}>
      {label}
    </button>
  );
}

export default Button;
