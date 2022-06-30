import { Formik, Form } from "formik";
import formJson from "../data/custom-form.json";
import { MyTextInput } from "../components/MyTextInput";
import { MySelectInput } from "../components/MySelectInput";
import * as Yup from "yup";

export const DynamicForm = () => {
  const initialValues: { [key: string]: any } = {
    ...formJson.reduce((a, v) => {
      return { ...a, [v.name]: v.value };
    }, {}),
  };
  const requiredFields = {
    ...formJson.reduce((a, v) => {
      if (v.validation) {
        let schema = Yup.string();
        for (const rule of v.validation) {
          if (rule.type === "required") {
            schema = schema.required(rule.message);
          }
          if (rule.type === "minLength") {
            schema = schema.min(
              (rule as any).value || 1,
              `Minimo de ${(rule as any).value || 1} caracteres`
            );
          }
          if (rule.type === "email") {
            schema = schema.email(rule.message || "Email is invalid");
          }
        }
        return { ...a, [v.name]: schema };
      }
      return { ...a };
    }, {}),
  };

  console.log("requiredFields", requiredFields);
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({ ...requiredFields })}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (
                type.toLowerCase() === "input" ||
                type.toLowerCase() === "password" ||
                type.toLowerCase() === "email"
              ) {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    placeholder={placeholder}
                    label={label}
                  />
                );
              } else if (type.toLowerCase() === "select") {
                return (
                  <MySelectInput
                    key={name}
                    type={type as any}
                    name={name}
                    placeholder={placeholder}
                    label={label}
                  >
                    <option value="">Select an option</option>
                    {
                      /* options?.map((opt) => {
                        return (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                        );
                    }) */
                      Object.entries(options as any).map(
                        ([key, value]): JSX.Element => (
                          <option key={key} value={key}>
                            {value as any}
                          </option>
                        )
                      )
                    }
                  </MySelectInput>
                );
              } else {
                throw new Error(`El type "${type}" no es soportado`);
              }
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
