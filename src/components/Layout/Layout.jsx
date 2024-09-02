import AppBar from "../AppBar/AppBar";
import css from "../Layout/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      <div className={css.containerPage}>{children}</div>
    </div>
  );
}
