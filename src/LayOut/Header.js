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
import {UserContext} from "../Context/UserContext"
const Header = () => {

    const context = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(); 

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return(
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white text-decoration-none">
                    Auth App
                </Link>
            </NavbarBrand>
            <NavbarText className="text-white">{
                context.user?.email ? context.user.email : " "
            }</NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav style={{ marginLeft: "auto" }} navbar>
                    {
                        context.user ? (
                            <NavItem>
                                <NavLink tag={Link} to="/" className="text-white text-decoration-none">
                                    LogOut
                                </NavLink>
                            </NavItem>
                        ) : (
                            <>
                            <NavItem>
                                <NavLink  tag={Link} to="/signup" className="text-white text-decoration-none">
                                    SignUp
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  tag={Link} to="/signin" className="text-white text-decoration-none">
                                    SignIn
                                </NavLink>
                            </NavItem>
                            </>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>   
    )
}

export default Header;