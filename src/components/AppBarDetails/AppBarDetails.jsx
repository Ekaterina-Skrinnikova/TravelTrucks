import { NavLink, Outlet } from "react-router-dom";
import css from "../../components/AppBarDetails/AppBarDetails.module.css";
import clsx from "clsx";

export default function AppBarDetails() {
  const classBuild = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
      <div className={css.container}>
        <NavLink className={classBuild} to="features">
          Features
        </NavLink>
        <NavLink className={classBuild} to="reviews">
          Reviews
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}
