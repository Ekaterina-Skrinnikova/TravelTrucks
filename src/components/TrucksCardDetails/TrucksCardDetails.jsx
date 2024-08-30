import clsx from "clsx";
import { useParams } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import css from "../../components/TrucksCardDetails/TrucksCardDetails.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import { selectCamper } from "../../redux/campers/selectors";

export default function TrucksCardDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(selectCamper);
  console.log(camper);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (!camper) {
    return <p>Loading...</p>;
  }

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
          <p>
            {averageRating.toFixed(1)}({camper.reviews.length} Reviews)
          </p>
        </div>
        <div className={css.flexLocation}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-Map`}></use>
          </svg>
          <p>{camper.location}</p>
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
