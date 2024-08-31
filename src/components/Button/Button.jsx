import clsx from "clsx";
import css from "../Button/Button.module.css";

export default function Button({
  children,
  type = "button",
  onClick,
  className,
  disabled,
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(css.btn, className)}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
