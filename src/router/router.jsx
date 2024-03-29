import React, { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout, Spinner } from '../components/index'

const Home = lazy(() => import('../pages/Home/Home'));
const Services = lazy(() => import('../pages/Services/Services'));
const ServiceDetails = lazy(() => import('../pages/Services/ServiceDetails'));
const Portfolio = lazy(() => import('../pages/Portfolio/Portfolio'));
const routes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/services',
        element: Services
    },
    {
        path: '/services/details',
        element: ServiceDetails
    },
    {
        path: '/portfolio',
        element: Portfolio
    }
]
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                {
                    routes.map((route, index) => {
                        const RouteComponent = route.element;
                        return (
                            <Route key={index} index={!route.path && true} path={route.path}
                                element={
                                    <Suspense fallback={<Spinner position="full" />}>
                                        <RouteComponent />
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