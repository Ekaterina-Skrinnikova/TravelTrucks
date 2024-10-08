import TrucksCardDetails from "../../components/TrucksCardDetails/TrucksCardDetails";
import BookForm from "../../components/BookForm/BookForm";
import css from "../../page/DetailsPage/DetailsPage.module.css";
import { NavLink, Outlet, useParams } from "react-router-dom";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import { Suspense, useEffect } from "react";

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
    <div className={clsx("container", css.container)}>
      <TrucksCardDetails />

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
          <Suspense>
            <Outlet />
          </Suspense>

          <BookForm />
        </div>
      </div>
    </div>
  );
}
