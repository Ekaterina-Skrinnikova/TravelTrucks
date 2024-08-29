import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";

export default function Features() {
  const camper = useSelector(selectCamper);
  return (
    <div>
      <ul></ul>

      <p>Vehicle details</p>
      <div>
        <ul>
          <li>Form</li>
          <li>Length</li>
          <li>Width</li>
          <li>Height</li>
          <li>Tank</li>
          <li>Comsumption</li>
        </ul>
        <ul>
          <li>{camper.form}</li>
          <li>{camper.length}</li>
          <li>{camper.width}</li>
          <li>{camper.height}</li>
          <li>{camper.tank}</li>
          <li>{camper.consumption}</li>
        </ul>
      </div>
    </div>
  );
}
