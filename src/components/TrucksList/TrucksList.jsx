import { useDispatch, useSelector } from "react-redux";
import { selectTotalVisible } from "../../redux/campers/selectors";
import TrucksCard from "../TrucksCard/TrucksCard";
import Button from "../Button/Button";
import { incrementVisible } from "../../redux/campers/slice";
import Loader from "../../components/Loader/Loader";
import { selectFiltredCampers } from "../../redux/filters/slice";
import css from "../../components/TrucksList/TrucksList.module.css";

export default function TrucksList() {
  const dispatch = useDispatch();

  const totalVisible = useSelector(selectTotalVisible);
  const campers = useSelector(selectFiltredCampers);

  if (!campers) {
    return <Loader />;
  }

  // console.log(campers);

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
