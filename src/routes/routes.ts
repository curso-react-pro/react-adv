import { lazy } from 'react';
//import { LazyPage1, LazyPage2, LazyPage3} from '../01-lazyLoad/pages';
//import LazyLayout from '../01-lazyLoad/layout/LazyLayout';
import { NoLazy } from '../01-lazyLoad/pages/NoLazy';

type JSXComponent = ()=> JSX.Element;
interface Route {
    to: string;
    path: string;
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


//para poder ser invocado el componente debe estar exportado como default
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyLoad/layout/LazyLayout'));
// const lazy2 = lazy(() => import(/* webpackChunkName: "Lazypage2" */'../01-lazyLoad/pages/LazyPage2'));
// const lazy3 = lazy(() => import(/* webpackChunkName: "Lazypage3" */'../01-lazyLoad/pages/LazyPage3'));

export const routes:Route[] = [
    {
        to: '/lazyLoad',
        path: '/lazyLoad/*',
        Component: LazyLayout,
        name: 'LazyLayout',
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No lazy',
    },
]