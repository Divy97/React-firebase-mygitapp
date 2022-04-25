import React from "react";
import {Container} from "reactstrap";

const Footer = () => {
    return(
        <Container 
        fluid
        tag="footer"
        className="text-center bg-info text-white text-uppercase fixed-bottom pd-5"
        >
            Divy - Github app with firebase
        </Container>
    )
}

export default Footer;