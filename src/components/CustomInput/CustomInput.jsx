import css from "../../components/CustomInput/CustomInput.module.css";

export default function CustomInput({ value, onClick }) {
  return (
    <div className={css.input} onClick={onClick}>
      {value || "Booking date*"}
    </div>
  );
}
