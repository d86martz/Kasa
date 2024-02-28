import React from "react";
import { Link } from "react-router-dom";
import navList from "../../datas/headerNavList.json"

const HeaderNav = () => {
    return (
        <nav className="header-nav">"
            {navList.map((navLink) => {
                return (
                    <Link to="./" className="navLink">
                        navLink.name
                    </Link>
                )
            })}
        </nav>
    )
}
export default HeaderNav