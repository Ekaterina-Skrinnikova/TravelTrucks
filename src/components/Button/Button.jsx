import clsx from "clsx";
import css from "../Button/Button.module.css";

export default function Button({ children, type, onClick, className }) {
  return (
    <button onClick={onClick} className={clsx(css.btn, className)} type={type}>
      {children}
    </button>
  );
}
