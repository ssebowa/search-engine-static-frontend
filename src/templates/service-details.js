import React from "react";
import PropTypes from "prop-types";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import ServiceData from "../data/service.json";
import ServiceDetailsContainer from "../containers/service/service-details";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const ServiceDetails = ({
    match: {
        params: { id },
    },
}) => {
    const serviceId = parseInt(id, 10);
    const data = ServiceData.filter((service) => service.id === serviceId);
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Buznex – Service Details" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title={data[0]?.title}
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="/images/service/2.png"
                    />
                    <ServiceDetailsContainer data={data[0]} />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

ServiceDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    }),
};

export default ServiceDetails;
