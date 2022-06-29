import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";

export const FormikBasicPage = () => {
  interface formValues {
    firstName: string;
    lastName: string;
    email: string;
  }
  const validate = ({ firstName, lastName, email }: formValues) => {
    const errors: FormikErrors<formValues> = {};

    if (!firstName) {
      errors.firstName = "Required";
    } else if (firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!lastName) {
      errors.lastName = "Required";
    } else if (lastName.length > 10) {
      errors.lastName = "Must be 15 characters or less";
    }

    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    values: { firstName, lastName, email },
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });

  return (
    <div>
      <h1>Formik Basic Page</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={firstName}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
