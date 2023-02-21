import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Funfact from "../../../components/funfact";
import "../../../assets/css/floatingAnimations.css";
import HomeData from "../../../data/home.json";

const FunFactContainer = ({ classOption }) => {
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
            {/* <div className="container">
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
        </div> */}
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

            <div>
                <div className="counter-flex">
                    <div>
                        <iframe
                            title="Hectares of forests cut down or burned"
                            src="https://www.theworldcounts.com/embeds/counters/93?background_color=transparent&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=25px"
                            width="400"
                        ></iframe>
                    </div>

                    <div>
                        <iframe
                            title="World average temperature (°C)"
                            src="https://www.theworldcounts.com/embeds/counters/21?background_color=transparent&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=25"
                            width="400"
                        ></iframe>
                    </div>

                    <div>
                        <iframe
                            title="Rise in sea levels (cm)"
                            src="https://www.theworldcounts.com/embeds/counters/68?background_color=transparent&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=25px"
                            width="400"
                        ></iframe>
                    </div>
                </div>

                <div className="counter-flex">
                    <div>
                        <iframe
                            title="CO2 Concentration"
                            src="https://www.theworldcounts.com/embeds/counters/182?background_color=transparent&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=25"
                            width="400"
                        ></iframe>
                    </div>

                    <div>
                        <iframe
                            title="People who died from hunger"
                            src="https://www.theworldcounts.com/embeds/counters/2?background_color=transparent&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=25"
                            width="400"
                        ></iframe>
                    </div>
                </div>
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
