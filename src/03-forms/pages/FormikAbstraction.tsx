import { Formik, Form } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput, MySelectInput, MyCheckbox } from "../components";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobtype: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(20, "Debe tener 20 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Debe ser un email valido")
            .required("Requerido"),
          jobtype: Yup.string()
            .required("Requerido")
            .notOneOf(["it-junior"], "Esta opcion no es permitida"),
          terms: Yup.boolean().isTrue("Debe aceptar los terminos"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="First Name" name="firstName" />

            <MyTextInput label="Last Name" name="lastName" />

            <MyTextInput label="Email" name="email" type="email" />

            <MySelectInput label="Job Type" name="jobtype">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It-Senior</option>
              <option value="it-junior">It-Jr</option>
            </MySelectInput>

            <MyCheckbox label={"Terms and conditions"} name={"terms"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
