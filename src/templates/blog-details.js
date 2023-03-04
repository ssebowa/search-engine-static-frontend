import React from "react";
import PropTypes from "prop-types";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import BlogDetailsContainer from "../containers/blog/blog-details";
import BlogData from "../data/blog.json";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";

const BlogDetailsPage = ({
    match: {
        params: { id },
    },
}) => {
    const blogId = parseInt(id, 10);
    const data = BlogData.filter((blogItem) => blogItem.id === blogId);
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Ssebowa – Project Details" />
                <div className="wrapper">
                    <NavBarUpdated2></NavBarUpdated2>
                    <PageBanner
                        title="Preject Details"
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="/images/blog/banner.png"
                    />
                    <BlogDetailsContainer data={data[0]} />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

BlogDetailsPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    }),
};

export default BlogDetailsPage;
