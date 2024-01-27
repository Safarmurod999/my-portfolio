import React from 'react'
import { Footer, Header } from '../index'
import { Outlet } from 'react-router-dom'

function Layout() {
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