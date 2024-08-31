import css from "../../components/CustomInput/CustomInput.module.css";

export default function CustomInput({ value, onClick }) {
  return (
    <div className={css.input} onClick={onClick}>
      {value || "Booking date*"}
    </div>
  );
}

// export const CustomInput = forwardRef(({ value, onClick }, ref) =>

//     <button type="button" className={css.input} onClick={onClick} ref={ref}>
//       {value || "Booking date*"}
//     </button>

// );
