import React from "react";
import PropTypes from "prop-types";
import ServiceDetails from "../../../components/service-details";
import ServiceCate from "../../../components/sidebar/service-cate";
import ServiceData from "../../../data/service.json";
import Brochure from "../../../components/sidebar/brochure";

const ServiceDetailsContainer = ({ data }) => {
    return (
        <div className="single-service section-py">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <ServiceDetails data={data} />
                    </div>
                    <div className="col-xl-3 col-lg-4 offset-xl-1">
                        <div className="sidbar-widget float-start w-100">
                            <ServiceCate data={ServiceData} />
                        </div>
                        <div className="sidbar-widget float-start w-100 mt-10 mb-10">
                            <Brochure />
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <p>{data.bodyBottom}</p>
                </div>
            </div>
        </div>
    );
};

ServiceDetailsContainer.propTypes = {
    data: PropTypes.object,
};

export default ServiceDetailsContainer;
