import React from "react";
import NavbarLogo from "../Navbar/NavbarLogo";
import UserIconTile from "./UserIconTile";
import "../../CSS/dashboard.css";

function DashboardNavbar({ name }) {
    return (
        <div className="dashboard-navbar-container">
            <NavbarLogo />
            <UserIconTile name={name} />
        </div>
    )
}

export default DashboardNavbar;