import "./Input.css";

type InputType = "text" | "checkbox" | null;

interface InputProps {
  placeholder?: string;
  type?: InputType;
}

function Input({ placeholder, type }: InputProps) {
  return (
    <>
      <input type={type!} placeholder={placeholder} />
    </>
  );
}

export default Input;
