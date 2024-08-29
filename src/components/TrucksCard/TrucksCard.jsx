import clsx from "clsx";
import Button from "../Button/Button";
import sprite from "../../images/sprite.svg";
import css from "../../components/TrucksCard/TrucksCard.module.css";

export default function TrucksCard({ camper }) {
  const arrIcon = [
    "icon-diagram",
    "icon-fuel-pump",
    "icon-wind",
    "icon-bi_droplet",
    "icon-cup-hot",
    "icon-tv",
    "icon-ui-radios",
  ];
  const arrKey = [
    "transmission",
    "engine",
    "AC",
    "bathroom",
    "kitchen",
    "TV",
    "radio",
    "refrigerator",
    "microwave",
    "gas",
    "water",
  ];
  const averageRating =
    camper.reviews.reduce((total, item) => {
      return total + item.reviewer_rating;
    }, 0) / camper.reviews.length;

  return (
    <div className={css.container}>
      <img className={css.img} src={camper.gallery[0].thumb} />
      <div>
        <div className={css.flex}>
          <h2 className={css.title}>{camper.name}</h2>
          <div className={css.flexPrice}>
            <p className={css.title}>€{camper.price}.00</p>
            <svg className={css.iconHeart}>
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </div>
        </div>

        <div className={css.flexInfo}>
          <div className={css.flexRating}>
            <svg className={clsx(css.icon, css.iconStar)}>
              <use href={`${sprite}#icon-star`}></use>
            </svg>
            <p>
              {averageRating}({camper.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.flexLocation}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-Map`}></use>
            </svg>
            <p>{camper.location}</p>
          </div>
        </div>

        {camper.description.length > 60 && (
          <p className={css.text}>{camper.description.slice(0, 60)}...</p>
        )}

        <ul className={css.flexList}>
          {arrIcon.map((icon, i) => (
            <li className={css.item} key={i}>
              <svg className={css.iconList}>
                <use href={`${sprite}#${icon}`}></use>
              </svg>
              {typeof camper[arrKey[i]] === "boolean" ? (
                <p>{arrKey[i]}</p>
              ) : (
                <p>{camper[arrKey[i]]}</p>
              )}
            </li>
          ))}
        </ul>

        <Button>Show more</Button>
      </div>
    </div>
  );
}
