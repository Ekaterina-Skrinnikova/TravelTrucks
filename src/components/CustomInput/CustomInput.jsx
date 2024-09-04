import css from "../../components/CustomInput/CustomInput.module.css";

export default function CustomInput({ value, onClick }) {
  return (
    <input
      className={css.input}
      onClick={onClick}
      value={value}
      placeholder="Booking date*"
    />
    // <div className={css.input} onClick={onClick}>
    //   {value || "Booking date*"}
    // </div>
  );
}
