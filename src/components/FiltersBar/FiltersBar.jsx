import Button from "../Button/Button";
import sprite from "../../images/sprite.svg";
import css from "../FiltersBar/FiltersBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/filters/selectors";
import // selectCampers,
// selectTotalVisible,
"../../redux/campers/selectors";
import {
  setLocation,
  setTypeTruck,
  toggleFeature,
} from "../../redux/filters/slice";

export default function FiltersBar() {
  const dispatch = useDispatch();
  // const campers = useSelector(selectCampers);
  const filters = useSelector(selectFilters);
  // const totalVisible = useSelector(selectTotalVisible);

  console.log(filters.features);

  const handleLocationChange = (evt) => {
    dispatch(setLocation(evt.target.value));
  };

  const handleTypeTruckChange = (type) => {
    dispatch(setTypeTruck(type));
  };

  const handleToggle = (feature) => {
    dispatch(toggleFeature(feature));
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

      {/* <div>
        <p className={css.label}>Location</p>
        <div className={css.input}>
          <svg className={css.iconCity}>
            <use href={`${sprite}#icon-Map`}></use>
          </svg>
          <p className={css.textCity}>City</p>
        </div>
      </div> */}
      <p className={css.textFilter}>Filters</p>
      <ul className={css.list}>
        <li>
          <p className={css.text}>Vehicle equipment</p>

          <div className={css.wrapperBorder}>
            <button
              onClick={() => handleToggle("AC")}
              type="button"
              className={css.wrapper}
            >
              <svg className={css.icon}>
                <use href={`${sprite}#icon-wind`}></use>
              </svg>
              AC
            </button>
            <button
              onClick={() => handleToggle("Automatic")}
              type="button"
              className={css.wrapper}
            >
              <svg className={css.icon}>
                <use href={`${sprite}#icon-diagram`}></use>
              </svg>
              Automatic
            </button>
            <button
              onClick={() => handleToggle("Kitchen")}
              type="button"
              className={css.wrapper}
            >
              <svg className={css.icon}>
                <use href={`${sprite}#icon-cup-hot`}></use>
              </svg>
              Kitchen
            </button>
            <button
              onClick={() => handleToggle("TV")}
              type="button"
              className={css.wrapper}
            >
              <svg className={css.icon}>
                <use href={`${sprite}#icon-tv`}></use>
              </svg>
              TV
            </button>
            <button
              onClick={() => handleToggle("Bathroom")}
              type="button"
              className={css.wrapper}
            >
              <svg className={css.icon}>
                <use href={`${sprite}#icon-bi_droplet`}></use>
              </svg>
              Bathroom
            </button>
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
