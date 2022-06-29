import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const {
    formData,
    onChange,
    resetForm,
    isValidEmail,
    name,
    email,
    password,
    confirmPassword,
  } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //const { name, email, password, confirmPassword } = formData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>RegisterPage</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
          name="name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          name="email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es valido</span>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          name="password"
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {!(password.trim().length >= 6) && (
          <span>La contraseña debe tener minimo 6 caracteres</span>
        )}
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={onChange}
          name="confirmPassword"
        />
        {confirmPassword.trim().length <= 0 && (
          <span>Este campo es necesario</span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset form
        </button>
      </form>
    </div>
  );
};
