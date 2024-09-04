import clsx from "clsx";
import Button from "../Button/Button";
import sprite from "../../images/sprite.svg";
import css from "../../components/TrucksCard/TrucksCard.module.css";
import { Link } from "react-router-dom";
import { arrIcon, arrKey } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/filters/slice";
import { selectFavorites } from "../../redux/filters/selectors";

export default function TrucksCard({ camper }) {
  const dispatch = useDispatch();
  const arrLocation = camper.location ? camper.location.split(",") : [];
  const favorites = useSelector(selectFavorites) || [];
  const isFavorite = favorites.includes(camper.id);

  const averageRating =
    camper.reviews.reduce((total, item) => {
      return total + item.reviewer_rating;
    }, 0) / camper.reviews.length;

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(deleteFavorite(camper.id));
    } else {
      dispatch(addFavorite(camper.id));
    }
  };

  return (
    <div className={css.container}>
      <img className={css.img} src={camper.gallery[0].thumb} />
      <div>
        <div className={css.flex}>
          <h2 className={css.title}>
            {camper.name.split(" ").slice(0, 4).join(" ")}
          </h2>
          <div className={css.flexPrice}>
            <p className={css.title}>{"€" + camper.price + ",00"}</p>
            <button onClick={handleFavoriteToggle} className={css.btnHeart}>
              <svg className={isFavorite ? css.active : css.iconHeart}>
                <use href={`${sprite}#icon-heart`}></use>
              </svg>
            </button>
          </div>
        </div>

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

        {camper.description.length > 55 ? (
          <p className={css.text}>{camper.description.slice(0, 55) + "..."}</p>
        ) : (
          <p className={css.text}>{camper.description}</p>
        )}

        <ul className={css.flexList}>
          {arrIcon.map((icon, i) => {
            if (i < 5)
              return (
                <li className={css.item} key={i}>
                  <svg className={css.iconList}>
                    <use href={`${sprite}#${icon}`}></use>
                  </svg>
                  {typeof camper[arrKey[i]] === "boolean" ? (
                    <p>
                      {arrKey[i].charAt(0).toUpperCase() + arrKey[i].slice(1)}
                    </p>
                  ) : (
                    <p>
                      {camper[arrKey[i]].charAt(0).toUpperCase() +
                        camper[arrKey[i]].slice(1)}
                    </p>
                  )}
                </li>
              );
          })}
        </ul>

        <Link to={`/catalog/${camper.id}`}>
          <Button className={css.btn}>Show more</Button>
        </Link>
      </div>
    </div>
  );
}
