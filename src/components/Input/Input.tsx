import "./Input.css";

type InputType = "text" | "checkbox" | "search" | null;

interface InputProps {
  placeholder?: string;
  type?: InputType;
  inputClass?: string;
}

export function Input({ placeholder, type, inputClass }: InputProps) {
  return (
    <>
      <input className={inputClass} type={type!} placeholder={placeholder} />
    </>
  );
}
