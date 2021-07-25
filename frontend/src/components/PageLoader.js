import React from "react";
import { Container, Spinner } from "react-bootstrap";

const PageLoader = () => {
    return (
        <Container
            fluid
            className="d-flex align-content-center page-loader__container"
        >
            <Spinner animation="grow" className="mx-auto my-auto" />
        </Container>
    );
};

export default PageLoader;
