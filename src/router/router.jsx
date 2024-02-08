import React, { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout, Spinner } from '../components/index'
import Transition from '../utils/transition';

const Home = lazy(() => import('../pages/Home/Home'));
const Services = lazy(() => import('../pages/Services/Services'));
const routes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/services',
        element: Services
    }
]
function Router() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Layout />}>
                {
                    routes.map((route, index) => {
                        const RouteComponent = route.element;
                        return (
                            <Route key={index} index={!route.path && true} path={route.path}
                                element={
                                    <Suspense fallback={<Spinner position="full" />}>
                                        <Transition><RouteComponent /></Transition>
                                    </Suspense>
                                } />
                        )
                    })
                }
            </Route>
        </Routes>
    )
}

export default Router