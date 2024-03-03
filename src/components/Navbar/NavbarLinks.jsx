import React from "react";

function NavbarLinks(props) {
    return (
        <a href={props.link}>
            <h2 className="navbar-links">
                {props.heading}
            </h2>
        </a>
    )
}

export default NavbarLinks;