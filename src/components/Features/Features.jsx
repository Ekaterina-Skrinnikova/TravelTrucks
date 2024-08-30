import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
// import sprite from "../../images/sprite.svg";
import css from "../../components/Features/Features.module.css";
// import { useEffect } from "react";
// import { fetchCamperById } from "../../redux/campers/operations";
// import { useParams } from "react-router-dom";

export default function Features() {
  // const dispatch = useDispatch();
  // const { id } = useParams();
  // const arrIcon = [
  //   "icon-diagram",
  //   "icon-fuel-pump",
  //   "icon-wind",
  //   "icon-bi_droplet",
  //   "icon-cup-hot",
  //   "icon-tv",
  //   "icon-ui-radios",
  // ];
  // const arrKey = [
  //   "transmission",
  //   "engine",
  //   "AC",
  //   "bathroom",
  //   "kitchen",
  //   "TV",
  //   "radio",
  //   "refrigerator",
  //   "microwave",
  //   "gas",
  //   "water",
  // ];

  // useEffect(() => {
  //   dispatch(fetchCamperById(id));
  // }, [dispatch, id]);

  const camper = useSelector(selectCamper);
  console.log(camper);

  return (
    <div className={css.container}>
      {/* <ul className={css.flexList}>
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
      </ul> */}

      <p>Vehicle details</p>
      <div>
        <ul>
          <li>Form</li>
          <li>Length</li>
          <li>Width</li>
          <li>Height</li>
          <li>Tank</li>
          <li>Comsumption</li>
        </ul>
        <ul>
          <li>{camper.form}</li>
          <li>{camper.length}</li>
          <li>{camper.width}</li>
          <li>{camper.height}</li>
          <li>{camper.tank}</li>
          <li>{camper.consumption}</li>
        </ul>
      </div>
    </div>
  );
}
