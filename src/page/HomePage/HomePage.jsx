import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import css from "../HomePage/HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.overlay}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <Link to="/catalog">
        <Button className={css.btn}>View Now</Button>
      </Link>
    </div>
  );
}
