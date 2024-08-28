import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.text, isActive && css.active);
  };
  return (
    <nav className={css.container}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
}
