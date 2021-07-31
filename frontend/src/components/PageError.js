import React from "react";
import { Container, Alert } from "react-bootstrap";

const PageError = ({ error }) => {
    return (
        <Container
            fluid
            className="d-flex align-content-center page-loader__container"
        >
            <Alert variant="danger" className="mx-auto my-auto">
                {error}
            </Alert>
        </Container>
    );
};

export default PageError;
