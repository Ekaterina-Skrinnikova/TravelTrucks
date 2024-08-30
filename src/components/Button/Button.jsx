import css from "../Button/Button.module.css";

export default function Button({ children, type }) {
  return (
    <button className={css.btn} type={type}>
      {children}
    </button>
  );
}
