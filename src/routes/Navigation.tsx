import { Suspense } from 'react';
import { NavLink, Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
//import { LazyPage1,LazyPage2,LazyPage3 } from '../01-lazyLoad/pages';
import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>

      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {/*TODO: Crear NavLinks dinamicos */}
              {

                routes.map(({ to, name }, index) => {
                  return (
                    <li key={to}>
                      <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''} >{name}</NavLink>
                    </li>
                  );
                })
              }

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
            {
              routes.map(({ to, path, Component }, index) => (
                <Route key={to} path={path} element={<Component />} />
              ))
            }
            {/* <Route path="/lazy1" element={<LazyPage1 />} />
            <Route path="/lazy2" element={<LazyPage2 />} />
            <Route path="/lazy3" element={<LazyPage3 />} /> */}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}