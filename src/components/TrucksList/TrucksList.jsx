import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectTotalVisible,
} from "../../redux/campers/selectors";
import TrucksCard from "../TrucksCard/TrucksCard";
import css from "../../components/TrucksList/TrucksList.module.css";
import Button from "../Button/Button";
import { incrementVisible } from "../../redux/campers/slice";

export default function TrucksList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const totalVisible = useSelector(selectTotalVisible);

  const visibleCampers = campers.slice(0, totalVisible);

  const handleLoadMoreClick = () => {
    dispatch(incrementVisible());
  };

  return (
    <div className={css.wrapper}>
      <ul className={css.container}>
        {visibleCampers.map((item) => (
          <li key={item.id}>
            <TrucksCard camper={item} />
          </li>
        ))}
      </ul>
      {totalVisible < campers.length && (
        <Button className={css.btn} onClick={handleLoadMoreClick} type="button">
          Load more
        </Button>
      )}
    </div>
  );
}
