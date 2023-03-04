import React from "react";

import GallaryImagesData from "../../data/gallaryImages.json";

import { Container, Row, Col, Image } from "react-bootstrap";

function index(props) {
    return (
        <Container className="mt-4">
            {" "}
            <Row>
                {GallaryImagesData &&
                    GallaryImagesData.map((image) => {
                        return (
                            <Col key={image.id} xs={6} md={4}>
                                <Image
                                    style={{ height: "500px" }}
                                    className="w-100 m-3 shadow-lg  bg-body rounded"
                                    src={image.thumb}
                                ></Image>
                            </Col>
                        );
                    })}
            </Row>
        </Container>
    );
}

export default index;
