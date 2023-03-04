import React, { useEffect } from "react";
import BlogItemRightContainer from "../containers/blog/blog-item-right";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import BlogData from "../data/blog.json";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import { BASEURL_Blog } from "../connection/BaseUrl";

import { useParams } from "react-router-dom";
import BlogMainContainer from "../containers/blog/blog-item-right/blogmain";

const BlogRightSidebarPage = () => {
    const [blogData, SetBlogData] = React.useState([]);
    const [DataLoaded, SetDataLoaded] = React.useState(false);
    let { _page } = useParams();
    const FetchBlogData = () => {
        SetDataLoaded(false);
        if (_page === undefined) {
            var Url = BASEURL_Blog + "posts/?page=1";
            console.log(Url);
        } else {
            var Url = BASEURL_Blog + "posts/?page=" + _page;
            console.log(Url);
        }
        fetch(Url)
            .then((r) => r.json())
            .then((r) => {
                console.log(r.results);
                SetBlogData(r.results);
                SetDataLoaded(true);
            })
            .catch((e) => {
                console.log(e);
                SetBlogData([]);
                SetDataLoaded(true);
            });
    };
    useEffect(() => {
        FetchBlogData();
    }, []);
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Buznex – Blog Right Sidebar" />
                <div className="wrapper">
                    <Header />
                    <PageBanner title="Ssebowa Blogs" excerpt="Read exclusive blog posts only at ssebowa blogs." image="./images/blog/banner.png" />
                    <BlogMainContainer data={blogData} />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default BlogRightSidebarPage;
