import React from 'react'
import { Footer, Header } from '../index'
import { Outlet } from 'react-router-dom'
function Layout() {
    MouseFollower.registerGSAP(gsap);
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout