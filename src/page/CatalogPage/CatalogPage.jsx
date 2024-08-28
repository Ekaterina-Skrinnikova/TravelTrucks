import FiltersBar from "../../components/FiltersBar/FiltersBar";
import TrucksList from "../../components/TrucksList/TrucksList";
import css from "../CatalogPage/CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <div className={css.container}>
      <FiltersBar />
      <TrucksList />
    </div>
  );
}
