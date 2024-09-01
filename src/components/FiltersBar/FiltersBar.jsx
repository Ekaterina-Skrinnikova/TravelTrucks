import Button from "../Button/Button";
import sprite from "../../images/sprite.svg";
import css from "../FiltersBar/FiltersBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/filters/selectors";
import {
  setLocation,
  setTypeTruck,
  toggleFeature,
} from "../../redux/filters/slice";
// import { selectCampers } from "../../redux/campers/selectors";

export default function FiltersBar() {
  const dispatch = useDispatch();
  // const campers = useSelector(selectCampers);
  const filters = useSelector(selectFilters);

  console.log(filters.location);

  console.log(filters.features);

  const handleLocationChange = (evt) => {
    dispatch(setLocation(evt.target.value));
  };

  const handleTypeTruckChange = (type) => {
    dispatch(setTypeTruck(type));
  };

  const handleToggle = (feature) => {
    if (filters.features) {
      dispatch(toggleFeature(feature));
    } else {
      console.error("Features object is undefined");
    }
  };

  return (
    <div className={css.container}>
      <label htmlFor="location" className={css.label}>
        Location
      </label>
      <input
        className={css.input}
        value={filters.location}
        onChange={handleLocationChange}
        id="location"
        type="text"
        placeholder="City"
      />

      <p className={css.textFilter}>Filters</p>
      <ul className={css.list}>
        <li>
          <p className={css.text}>Vehicle equipment</p>

          <div className={css.wrapperBorder}>
            {["AC", "automatic", "kitchen", "TV", "bathroom"].map((feature) => (
              <button
                key={feature}
                onClick={() => handleToggle(feature)}
                type="button"
                className={`${css.wrapper} ${
                  filters.features?.[feature] ? css.active : ""
                }`}
              >
                <svg className={css.icon}>
                  <use href={`${sprite}#icon-${feature}`}></use>
                </svg>
                {feature.charAt(0).toUpperCase() + feature.slice(1)}
              </button>
            ))}
          </div>
        </li>

        <li>
          <p className={css.text}>Vehicle type</p>
          <div className={css.wrapperBorder}>
            <button
              className={css.wrapper}
              onClick={() => handleTypeTruckChange("Van")}
              type="button"
            >
              <svg className={css.icon}>
                <use href={`${sprite}#icon-bi_grid-1x2`}></use>
              </svg>
              Van
            </button>
            <button
              onClick={() => handleTypeTruckChange("Fully Integrated")}
              type="button"
              className={css.wrapper}
            >
              <svg className={css.icon}>
                <use href={`${sprite}#icon-bi_grid`}></use>
              </svg>
              Fully Integrated
            </button>
            <button
              onClick={() => handleTypeTruckChange("Alcove")}
              type="button"
              className={css.wrapper}
            >
              <svg className={css.icon}>
                <use href={`${sprite}#icon-bi_grid-3x3-gap`}></use>
              </svg>
              Alcove
            </button>
          </div>
        </li>
      </ul>

      <Button className={css.btn}>Search</Button>
    </div>
  );
}
