import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import Button from "../Button/Button";
import CustomInput from "../CustomInput/CustomInput";
import css from "../../components/BookForm/BookForm.module.css";

export default function BookForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [date, setDate] = useState(null);

  const isFormValid = () => {
    return (
      formValues.name.trim() !== "" && formValues.email.trim() !== "" && date
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
    setDate(null);
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
          selected={date}
          onChange={(date) => setDate(date)}
          // startDate={startDate}
          // endDate={endDate}
          // selectsRange
          dateFormat="dd.MM.yyyy"
          customInput={<CustomInput />}
          className="custom-datepicker"
          calendarClassName="custom-datepicker"
        />

        <textarea
          className={css.textarea}
          name="comment"
          value={formValues.comment}
          onChange={handleChange}
          placeholder="Comment"
        ></textarea>
      </div>

      <div className={css.btnWrraper}>
        <Button type="submit" className={css.btn}>
          Send
        </Button>
      </div>
    </form>
  );
}
