import { Field, Formik } from "formik";
import Text from "../Text/Text";
import { Form } from "react-router-dom";
import Button from "../Button/Button";

export default function BookForm() {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        date: "",
      }}
      onSubmit={handleSubmit}
    >
      <Text>Book your campervan now</Text>
      <Text>Stay connected! We are always ready to help you.</Text>
      <Form>
        <Field type="text" placeHolder="Name*"></Field>
        <Field type="email" placeHolder="Email*"></Field>
        <Field type="date" placeHolder="Booking date*"></Field>
        <Field type="" placeHolder="Comment"></Field>

        <Button>Send</Button>
      </Form>
    </Formik>
  );
}
