import { Field, Formik, Form } from "formik";
import Button from "../Button/Button";
import toast from "react-hot-toast";
import css from "../../components/BookForm/BookForm.module.css";

export default function BookForm() {
  const handleSubmit = (values, actions) => {
    toast.success("Your data send!!!");
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        date: "",
        comment: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={css.wrapper}>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Name*"
          ></Field>
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Email*"
          ></Field>
          <Field
            className={css.input}
            type="date"
            name="date"
            placeholder="Booking date*"
          ></Field>
          <Field
            className={css.textarea}
            as="textarea"
            name="comment"
            placeholder="Comment"
          ></Field>
        </div>

        <div className={css.btn}>
          <Button type="submit">Send</Button>
        </div>
      </Form>
    </Formik>
  );
}
