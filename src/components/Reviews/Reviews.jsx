import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
import sprite from "../../images/sprite.svg";
import css from "../../components/Reviews/Reviews.module.css";

export default function Reviews() {
  const camper = useSelector(selectCamper);

  if (!camper) {
    return <p>Loading...</p>;
  }

  return (
    <ul className={css.container}>
      {camper.reviews.map((item) => (
        <li key={item.reviewer_name}>
          <div className={css.flex}>
            <div className={css.around}>
              {item.reviewer_name.split("").slice(0, 1)}
            </div>

            <div>
              <p>{item.reviewer_name}</p>
              <div className={css.wrapper}>
                {[...Array(5)].map((_, index) => {
                  return (
                    <svg
                      key={index}
                      className={
                        index < item.reviewer_rating
                          ? "iconStar filled"
                          : "iconStar "
                      }
                    >
                      <use href={`${sprite}#icon-star`}></use>
                    </svg>
                  );
                })}
              </div>
            </div>
          </div>

          <p className={css.text}>{item.comment}</p>
        </li>
      ))}
    </ul>
  );
}
