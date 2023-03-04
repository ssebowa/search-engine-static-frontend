import PropTyps from "prop-types";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const TeamCard = ({ data }) => {
    return (
        <Col>
            <Card border='info' >
                <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + data.thumb}
                    alt="img"
                    style={{
                        height: "300px",
                        objectFit: "contain",
                    }}
                    className="rounded-circle p-3"
                />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.designation}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

TeamCard.propTypes = {
    data: PropTyps.object,
};

export default TeamCard;
