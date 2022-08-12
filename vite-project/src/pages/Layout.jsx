import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const Layout = () => {

  const logout = () => {
    sessionStorage.removeItem('token')
  }

  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/blog'>Blogs</Link>
                </li>
                <li>
                    <Link to='/404'>404</Link>
                </li>
                <li>
                    <Link to='/' onClick={logout}>Logout</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
    </>
  )
}
