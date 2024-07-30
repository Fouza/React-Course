import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = ({ }) => {

    return (
        <div>
            <header>
                <Link to={"/"}>Home</Link>
                <Link to={"/contact"} >Contact</Link>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout