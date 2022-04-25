import React,{useState, useContext} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from "reactstrap";

import {Link} from "react-router-dom";
import UserContext from "../Context/UserContext"
const Header = () => {
    return(
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white text-decoration-none">
                    Divy GitFire App
                </Link>
            </NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
                <Nav style={{ marginLeft: "auto" }} navbar>
                    <NavItem>
                        <NavLink className="text-white text-decoration-none">
                            SignUp
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white text-decoration-none">
                            SignIn
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white text-decoration-none">
                            LogOut
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>   
    )
}

export default Header;