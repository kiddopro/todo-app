import "./Input.css";

type InputType = "text" | "checkbox" | "search" | null;

interface InputProps {
  placeholder?: string;
  type?: InputType;
}

export function Input({ placeholder, type }: InputProps) {
  return (
    <>
      <input type={type!} placeholder={placeholder} />
    </>
  );
}
