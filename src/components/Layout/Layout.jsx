import React from 'react';
import { Footer, Header } from '../index'
import { Outlet } from 'react-router-dom'
import BackTop from '../BackTop/BackTop';
const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <BackTop />
        </>
    )
}

export default Layout