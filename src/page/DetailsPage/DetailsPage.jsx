import TrucksCardDetails from "../../components/TrucksCardDetails/TrucksCardDetails";
import BookForm from "../../components/BookForm/BookForm";
import css from "../../page/DetailsPage/DetailsPage.module.css";
import { NavLink, Outlet, useParams } from "react-router-dom";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import { useEffect } from "react";
import { selectCamper } from "../../redux/campers/selectors";
import Loader from "../../components/Loader/Loader";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(selectCamper);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  const classBuild = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.container}>
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
          {camper ? <Outlet /> : <Loader />}

          <BookForm />
        </div>
      </div>
    </div>
  );
}
