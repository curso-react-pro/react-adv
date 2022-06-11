import { Suspense } from 'react';
import { NavLink, Route, Routes, BrowserRouter } from 'react-router-dom';
//import { LazyPage1,LazyPage2,LazyPage3 } from '../01-lazyLoad/pages';
import logo from '../logo.svg';
///import { routes } from './routes';
import { ShoppingPage } from '../02-components-patterns/pages/ShoppingPage';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />

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

            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''} >Shoping</NavLink>
              </li>
              <li>
                <NavLink to="/lazy2" className={({ isActive }) => isActive ? 'nav-active' : ''} >About</NavLink>
              </li>
              <li>
                <NavLink to="/lazy3" className={({ isActive }) => isActive ? 'nav-active' : ''} >Users</NavLink>
              </li>
            </ul>

          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            {/* {
              routes.map(({ to, path, Component }, index) => (
                <Route key={to} path={path} element={<Component />} />
              ))
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
            } */}
            <Route path="/lazy1" element={<h1>About</h1>} />
            <Route path="/lazy2" element={<h1>Users</h1>} />
            <Route path="/lazy3" element={<h1>Home</h1>} />
            <Route path="/" element={<ShoppingPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}