import React from "react"
import { Link } from "react-router-dom"
import './NavBar.css'
import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = (props) => {
    return (
        <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/arcades">
                        Arcades
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/machines">
                        Pinball Machines
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/favorites">
                        Favorites
                    </Link>
                </li>
            </ul>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item-logout">
                    <Link
                        className="nav-link"
                        to="/login"
                        onClick={() =>
                            sessionStorage.removeItem("pinball_user")
                        }
                    >
                        Logout
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
