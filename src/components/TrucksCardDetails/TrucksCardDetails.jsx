import clsx from "clsx";
import sprite from "../../images/sprite.svg";
import css from "../../components/TrucksCardDetails/TrucksCardDetails.module.css";
import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
import Loader from "../Loader/Loader";

export default function TrucksCardDetails() {
  const camper = useSelector(selectCamper);

  if (!camper) {
    return <Loader />;
  }
  const arrLocation = camper.location.split(",");
  const averageRating =
    camper.reviews?.reduce((total, item) => {
      return total + item.reviewer_rating;
    }, 0) / camper.reviews?.length;

  return (
    <div className={css.container}>
      <h2 className={css.title}>{camper.name}</h2>

      <div className={css.flexInfo}>
        <div className={css.flexRating}>
          <svg className={clsx(css.icon, css.iconStar)}>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <p className={css.border}>
            {averageRating.toFixed(1)}({camper.reviews.length + " Reviews"} )
          </p>
        </div>
        <div className={css.flexLocation}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-Map`}></use>
          </svg>
          <p className={css.textLocation}>
            {arrLocation[1] + ", " + arrLocation[0]}
          </p>
        </div>
      </div>

      <p className={css.titlePrice}>€{camper.price + ",00"} </p>

      <ul className={css.flex}>
        {camper.gallery.map((item) => (
          <li className={css.item} key={item.thumb}>
            <img className={css.img} src={item.thumb} alt="Trucks" />
          </li>
        ))}
      </ul>

      <p className={css.text}>{camper.description}</p>
    </div>
  );
}
