import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "../AppBar/AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.container}>
      <div className={css.containerInner}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
