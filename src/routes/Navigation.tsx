import { Suspense } from "react";
import {
  NavLink,
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
//import { LazyPage1,LazyPage2,LazyPage3 } from '../01-lazyLoad/pages';
import logo from "../logo.svg";

import {
  RegisterPage,
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  FormikAbstraction,
  RegisterFormikPage,
  DynamicForm,
} from "../03-forms/pages";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {/*TODO: Crear NavLinks dinamicos */}
              {/* {

                routes.map(({ to, name }, index) => {
                  return (
                    <li key={to}>
                      <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''} >{name}</NavLink>
                    </li>
                  );
                })
              } */}
              <li>
                <NavLink
                  to="/register-page"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Register page
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-basic"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik basic
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-yup"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik yup
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-components"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik components
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-abstraction"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik abstraction
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register-formik-page"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Register formik page
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dynamic-form"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Dynamic form
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/lazy1" className={({ isActive }) => isActive ? 'nav-active' : ''} >Lazy 1</NavLink>
              </li>
              <li>
                <NavLink to="/lazy2" className={({ isActive }) => isActive ? 'nav-active' : ''} >Lazy 2</NavLink>
              </li>
              <li>
                <NavLink to="/lazy3" className={({ isActive }) => isActive ? 'nav-active' : ''} >Lazy 3</NavLink>
              </li> */}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            {/* {
              routes.map(({ to, path, Component }, index) => (
                <Route key={to} path={path} element={<Component />} />
              ))
            } */}
            <Route path="/register-page" element={<RegisterPage />} />
            <Route path="/formik-basic" element={<FormikBasicPage />} />
            <Route path="/formik-yup" element={<FormikYupPage />} />
            <Route path="/formik-components" element={<FormikComponents />} />
            <Route path="/formik-abstraction" element={<FormikAbstraction />} />
            <Route path="/register-formik-page" element={<RegisterFormikPage />} />
            <Route path="/dynamic-form" element={<DynamicForm/>} />
            <Route
              path="/*"
              element={<Navigate to="register-page" replace />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
