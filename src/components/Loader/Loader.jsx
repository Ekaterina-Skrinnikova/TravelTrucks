import { Puff } from "react-loader-spinner";
import css from "../../components/Loader/Loader.module.css";

export default function Loader() {
  return (
    <Puff
      visible={true}
      height="80"
      width="80"
      color="#f8b26a"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass={css.ringWrapper}
    />
  );
}
