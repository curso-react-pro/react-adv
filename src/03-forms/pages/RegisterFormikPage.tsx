import "../styles/styles.css";
import { Formik, Form, /* useFormik */ } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components/MyTextInput";

export const RegisterFormikPage = () => {
  /*   const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Must be at least 2 characters")
        .max(20, "Must be less than 20 characters")
        .required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Must be at least 6 characters"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
  }); */

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Must be at least 2 characters")
            .max(20, "Must be less than 20 characters")
            .required("Name is required"),
          email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Must be at least 6 characters")
            .required("Password is required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="Name" name="name" />
            <MyTextInput label="Email" name="email" type="email" />
            <MyTextInput label="Password" name="password" type="password" />
            <MyTextInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button type="submit">Create</button>
            <button type="button" onClick={ formik.handleReset }>
              Reset form
            </button>
          </Form>
        )}
      </Formik>
    </div>
    /*     <div>
      <h1>RegisterFormikPage</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" {...getFieldProps("name")} />
        {touched.name && errors.name && <span>{errors.name}</span>}

        <label htmlFor="email">Email</label>
        <input type="text" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <label htmlFor="password">Password</label>
        <input type="password" {...getFieldProps("password")} />
        {touched.password && errors.password && <span>{errors.password}</span>}

        <label htmlFor="confirmPassword">Repeat password</label>
        <input type="password" {...getFieldProps("confirmPassword")} />
        {touched.confirmPassword && errors.confirmPassword && (
          <span>{errors.confirmPassword}</span>
        )}
      </form>
    </div> */
  );
};
