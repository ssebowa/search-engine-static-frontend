import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import Funfact from "../../../components/funfact";
import HomeData from "../../../data/home.json";

import "../../../assets/css/floatingAnimations.css";

const FunFactContainer = ({ classOption }) => {

    const [temperatureProblem, setTemperatureProblem] = useState({
        id: 1,
        title: "Temperature Problem",
        number: null,
    });
    const [hungerProblem, setHungerProblem] = useState({
        id: 2,
        title: "Hunger Problem",
        number: null,
    });
    const [schoolProblem, setSchoolProblem] = useState({
        id: 3,
        title: "School Problem",
        number: null,
    });
    const [unemployedProblem, setUnemployedProblem] = useState({
        id: 4,
        title: "Unemployed Problem",
        number: null,
    });

    const setValues = (data) => {
        setTemperatureProblem({
            ...temperatureProblem,
            number: data.change_temprature,
        });
        setHungerProblem({ ...hungerProblem, number: data.child_die_from_hunger });
        setSchoolProblem({ ...schoolProblem, number: data.girl_drop_from_school });
        setUnemployedProblem({ ...unemployedProblem, number: data.un_employ });
    };

    useEffect(() => {
        fetch("https://chatapi.ssebowa.org/counter")
            .then((response) => response.json())
            .then((data) => setValues(data))
            .catch((error) => console.error(error));
    }, [temperatureProblem]);

    const problems = [temperatureProblem, hungerProblem, schoolProblem, unemployedProblem];


    return (
        <div
            className={`funfact-section section-pb position-relative ${classOption}`}
            style={{
                backgroundImage:
                    'url("https://res.cloudinary.com/dicgvondb/image/upload/v1675617563/ssebowa/ssebowa.org/search-engine-static-frontend/images/shape/shape-1_qsmwq4_d1a9f8.png")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0% 0%",
            }}
        >
            <div className="container">
                <div className="row mb-n7">
                    {problems &&
                        problems.map((problem) => {
                            return (
                                <div key={problem.id} className="col-md-6 col-10 mb-7">
                                    <Funfact data={problem} key={problem.id} />
                                </div>
                            );
                        })}
                </div>
            </div>
            <svg className="funfact-svg" id="funfact" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 535">
                <path className="funfact-path" d="M1950,327.309S1666,1.64,1336,111.4,906,290.324,671,164.377,120.868,57.118-64,225.351" />
                <path
                    id="Shape_5_copy"
                    data-name="Shape 5 copy"
                    className="funfact-path"
                    d="M1919.04,532.448s-223.79-369.607-567.75-318.167-454.362,102.4-664.214-62.038S163.566-47.917-47.473,86.059"
                />
            </svg>

            <div className="moving-element-6">
                <img
                    src="https://res.cloudinary.com/dicgvondb/image/upload/v1674668347/ssebowa/ssebowa.org/search-engine-static-frontend/images/shape/shape-9_wrn1yx.png"
                    alt=""
                />
            </div>
            <div className="moving-element-7">
                <img
                    src="https://res.cloudinary.com/dicgvondb/image/upload/v1674668345/ssebowa/ssebowa.org/search-engine-static-frontend/images/shape/shape-11_gs6lcb.png"
                    alt=""
                />
            </div>
            <div className="moving-element-8">
                <img
                    src="https://res.cloudinary.com/dicgvondb/image/upload/v1674668343/ssebowa/ssebowa.org/search-engine-static-frontend/images/shape/2_ngorqv.png"
                    alt=""
                />
            </div>
            <div className="moving-element-9">
                <img
                    src="https://res.cloudinary.com/dicgvondb/image/upload/v1674668343/ssebowa/ssebowa.org/search-engine-static-frontend/images/shape/1_wvslml.png"
                    alt=""
                />
            </div>
            <div className="moving-element-10">
                <img
                    src="https://res.cloudinary.com/dicgvondb/image/upload/v1674668347/ssebowa/ssebowa.org/search-engine-static-frontend/images/shape/shape-7_ve8dwq.png"
                    alt=""
                />
            </div>
        </div>
    );
};

FunFactContainer.propTypes = {
    classOption: PropTypes.string,
};

FunFactContainer.defaultProps = {
    classOption: "mt-10 mt-lg-0",
};

export default FunFactContainer;
