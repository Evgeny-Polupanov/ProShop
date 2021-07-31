import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import Rating from "../components/Rating";
import PageLoader from "../components/PageLoader";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../actions/productActions";
import PageError from "../components/PageError";

const ProductScreen = ({
    match: {
        params: { id },
    },
}) => {
    const dispatch = useDispatch();

    const productDetails = useSelector(({ productDetails }) => productDetails);
    const { product, loading, error } = productDetails;

    useEffect(() => {
        dispatch(getProduct(id));
    }, [dispatch, id]);

    return (
        <>
            <Link className="btn btn-dark my-3" to="/">
                Go Back
            </Link>
            {loading ? (
                <PageLoader />
            ) : (
                <>
                    {error ? (
                        <PageError error={error} />
                    ) : (
                        <Row>
                            <Col md={6}>
                                <Image
                                    src={product?.image}
                                    alt={product?.name}
                                    fluid
                                />
                            </Col>
                            <Col md={3}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <h2>{product?.name}</h2>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Rating
                                            value={product?.rating}
                                            text={`${product?.numReviews} reviews`}
                                        />
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Price: ${product?.price}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Description: {product?.description}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Price:</Col>
                                                <Col>
                                                    <strong>
                                                        ${product?.price}
                                                    </strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Status:</Col>
                                                <Col>
                                                    {product?.countInStock > 0
                                                        ? "In Stock"
                                                        : "Out Of Stock"}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Button
                                                className="btn-block"
                                                type="button"
                                                disabled={
                                                    product?.countInStock <= 0
                                                }
                                            >
                                                Add To Cart
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    )}
                </>
            )}
        </>
    );
};

export default ProductScreen;
