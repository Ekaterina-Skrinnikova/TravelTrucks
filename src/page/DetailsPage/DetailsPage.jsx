import TrucksCardDetails from "../../components/TrucksCardDetails/TrucksCardDetails";
import BookForm from "../../components/BookForm/BookForm";
// import Features from "../../components/Features/Features";
// import Reviews from "../../components/Reviews/Reviews";
import css from "../../page/DetailsPage/DetailsPage.module.css";
// import AppBarDetails from "../../components/AppBarDetails/AppBarDetails";
import { NavLink, Outlet, useParams } from "react-router-dom";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import { useEffect } from "react";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  const classBuild = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.container}>
      <TrucksCardDetails />
      {/* <AppBarDetails /> */}
      <div>
        <div className={css.wrapper}>
          <NavLink className={classBuild} to="features">
            Features
          </NavLink>
          <NavLink className={classBuild} to="reviews">
            Reviews
          </NavLink>
        </div>
        <div className={css.box}>
          <Outlet />
          <BookForm />
        </div>
      </div>
    </div>
  );
}
