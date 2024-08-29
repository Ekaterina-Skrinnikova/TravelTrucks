import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import TrucksCard from "../TrucksCard/TrucksCard";
import css from "../../components/TrucksList/TrucksList.module.css";

export default function TrucksList() {
  const campers = useSelector(selectCampers);
  return (
    <ul className={css.container}>
      {campers.map((item) => (
        <li key={item.id}>
          <TrucksCard camper={item} />
        </li>
      ))}
    </ul>
  );
}
