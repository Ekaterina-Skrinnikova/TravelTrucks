import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../Button/Button";
import toast from "react-hot-toast";
import css from "../../components/BookForm/BookForm.module.css";
import { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";

export default function BookForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const isFormValid = () => {
    return (
      formValues.name.trim() !== "" &&
      formValues.email.trim() !== "" &&
      startDate &&
      endDate
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast.error("Please fill out all required fields !!!");
      return;
    }

    toast.success("Your data send!!!");
    setFormValues({ name: "", email: "", comment: "" });
    setDateRange([null, null]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <div className={css.wrapper}>
        <input
          className={css.input}
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Name*"
        />

        <input
          className={css.input}
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email*"
        />

        <DatePicker
          selected={startDate}
          onChange={(update) => setDateRange(update)}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          dateFormat="dd.MM.yyyy"
          customInput={<CustomInput />}
        />

        <textarea
          className={css.textarea}
          name="comment"
          value={formValues.comment}
          onChange={handleChange}
          placeholder="Comment"
        ></textarea>
      </div>

      <div className={css.btn}>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
}
