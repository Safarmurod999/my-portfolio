import React from 'react';
import { motion } from "framer-motion";
import { Footer, Header } from '../index'
import { Outlet } from 'react-router-dom'
import BackTop from '../BackTop/BackTop';
function Layout() {
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