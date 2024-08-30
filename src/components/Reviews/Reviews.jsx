import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
import sprite from "../../images/sprite.svg";
import css from "../../components/Reviews/Reviews.module.css";

export default function Reviews() {
  const camper = useSelector(selectCamper);
  return (
    <ul className={css.container}>
      {camper.reviews.map((item) => (
        <li key={item.reviewer_name}>
          <div></div>
          <p></p>
          <svg>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          {/* <svg><use href={ }></use></svg>
      <svg><use href={ }></use></svg>
      <svg><use href={ }></use></svg>
      <svg><use href={ }></use></svg> */}
          <p></p>
        </li>
      ))}
    </ul>
  );
}
