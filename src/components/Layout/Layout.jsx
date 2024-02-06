import React from 'react'
import { Footer, Header } from '../index'
import { Outlet } from 'react-router-dom'
import BackTop from '../BackTop/BackTop';
function Layout() {
    MouseFollower.registerGSAP(gsap);
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