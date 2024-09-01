import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllCampers } from "../../redux/campers/operations";
import FiltersBar from "../../components/FiltersBar/FiltersBar";
import TrucksList from "../../components/TrucksList/TrucksList";
import css from "../CatalogPage/CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <FiltersBar />
      <TrucksList />
    </div>
  );
}
