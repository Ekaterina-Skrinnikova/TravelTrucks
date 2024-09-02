import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllCampers } from "../../redux/campers/operations";
import FiltersBar from "../../components/FiltersBar/FiltersBar";
import TrucksList from "../../components/TrucksList/TrucksList";
import css from "../CatalogPage/CatalogPage.module.css";
import clsx from "clsx";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  return (
    <div className={clsx("container", css.container)}>
      <FiltersBar />
      <TrucksList />
    </div>
  );
}
