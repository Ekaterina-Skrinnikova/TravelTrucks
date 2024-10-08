import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
import sprite from "../../images/sprite.svg";
import css from "../../components/Features/Features.module.css";
import Loader from "../Loader/Loader";
import { arrIcon, arrKey } from "../../constants";

export default function Features() {
  const camper = useSelector(selectCamper);

  if (!camper) {
    return <Loader />;
  }

  return (
    <div className={css.container}>
      <ul className={css.flexList}>
        {arrIcon.map((icon, i) => (
          <li className={css.item} key={i}>
            <svg className={css.iconList}>
              <use href={`${sprite}#${icon}`}></use>
            </svg>
            {typeof camper[arrKey[i]] === "boolean" ? (
              <p> {arrKey[i].charAt(0).toUpperCase() + arrKey[i].slice(1)}</p>
            ) : (
              <p>
                {camper[arrKey[i]].charAt(0).toUpperCase() +
                  camper[arrKey[i]].slice(1)}
              </p>
            )}
          </li>
        ))}
      </ul>

      <div className={css.border}>
        <p className={css.text}>Vehicle details</p>
      </div>

      <div className={css.wrapper}>
        <ul className={css.list}>
          <li className={css.textItem}>Form</li>
          <li className={css.textItem}>Length</li>
          <li className={css.textItem}>Width</li>
          <li className={css.textItem}>Height</li>
          <li className={css.textItem}>Tank</li>
          <li className={css.textItem}>Comsumption</li>
        </ul>
        <ul className={css.list}>
          <li className={css.textItem}>{camper.form}</li>
          <li className={css.textItem}>{camper.length}</li>
          <li className={css.textItem}>{camper.width}</li>
          <li className={css.textItem}>{camper.height}</li>
          <li className={css.textItem}>{camper.tank}</li>
          <li className={css.textItem}>{camper.consumption}</li>
        </ul>
      </div>
    </div>
  );
}
