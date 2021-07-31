import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import PageLoader from "../components/PageLoader";
import PageError from '../components/PageError';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const productList = useSelector(({ productList }) => productList);
    const { loading, products, error } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <h1>Latest Products</h1>
            {loading ? (
                <PageLoader />
            ) : (
                <>
                    {error ? (
                        <PageError error={error} />
                    ) : (
                        <Row>
                            {(products ?? []).map((product) => (
                                <Col
                                    key={product._id}
                                    sm={12}
                                    md={6}
                                    lg={4}
                                    xl={3}
                                >
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                    )}
                </>
            )}
        </>
    );
};

export default HomeScreen;
