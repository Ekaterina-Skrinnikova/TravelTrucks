import Button from "../Button/Button";
import sprite from "../../images/sprite.svg";
import css from "../FiltersBar/FiltersBar.module.css";

export default function FiltersBar() {
  return (
    <div className={css.container}>
      {/* <label className={css.label}>
        Location
        <input className={css.input} type="text" placeholder="City" />
      </label> */}

      <div>
        <p className={css.label}>Location</p>
        <div className={css.input}>
          <svg className={css.iconCity}>
            <use href={`${sprite}#icon-Map`}></use>
          </svg>
          <p className={css.textCity}>City</p>
        </div>
      </div>

      <p className={css.textFilter}>Filters</p>

      <ul className={css.list}>
        <li>
          <p className={css.text}>Vehicle equipment</p>
          <div className={css.wrapperBorder}>
            <div className={css.wrapper}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-wind`}></use>
              </svg>
              AC
            </div>
            <div className={css.wrapper}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-diagram`}></use>
              </svg>
              Automatic
            </div>
            <div className={css.wrapper}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-cup-hot`}></use>
              </svg>
              Kitchen
            </div>
            <div className={css.wrapper}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-tv`}></use>
              </svg>
              TV
            </div>
            <div className={css.wrapper}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-bi_droplet`}></use>
              </svg>
              Bathroom
            </div>
          </div>
        </li>
        <li>
          <p className={css.text}>Vehicle type</p>
          <div className={css.wrapperBorder}>
            <div className={css.wrapper}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-bi_grid-1x2`}></use>
              </svg>
              Van
            </div>
            <div className={css.wrapper}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-bi_grid`}></use>
              </svg>
              Fully Integrated
            </div>
            <div className={css.wrapper}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-bi_grid-3x3-gap`}></use>
              </svg>
              Alcove
            </div>
          </div>
        </li>
      </ul>

      <Button>Search</Button>
    </div>
  );
}
