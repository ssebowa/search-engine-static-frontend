import React from "react";
import TeamCard from "../../components/team-card";
import TeamData from "../../data/team.json";
import Row from "react-bootstrap/Row";

const TeampPageContainer = () => {
    return (
        <div className="service-section section-py">
            <div className="container">
                <Row xs={1} md={2} className="g-4 my-3">
                    {TeamData &&
                        TeamData.map((single, key) => {
                            return (
                                <div
                                    key={key}
                                    className="col col-md-6 col-lg-4 col-xl-4 text-center mb-7"
                                >
                                    <TeamCard key={key} data={single} />
                                </div>
                            );
                        })}
                </Row>
            </div>
        </div>
    );
};

export default TeampPageContainer;
