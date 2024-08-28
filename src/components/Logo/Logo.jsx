import sprite from "../../images/sprite.svg";
import css from "../Logo/Logo.module.css";

export default function Logo() {
  return (
    <svg className={css.img}>
      <use href={`${sprite}#icon-TravelTrucks`}></use>
    </svg>
  );
}
