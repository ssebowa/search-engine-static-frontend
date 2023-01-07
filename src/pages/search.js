import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import Layout from "../layouts/index";
import SearchHeader from "../layouts/SearchHeader";
import SearchResults from "../components/SearchResults/SearchResults";
import Footer from "../layouts/footer";
import SearchTypeHeader from "../components/SearchResults/SearchTypeHeader";

const SearchPage = () => {
    const [query, SetQuery] = React.useState("");
    const RetrieveQuery = () => {
        var h = window.location.href;
        var q = h.split("search?q=")[1];
        if (!q.replace(/\s/g, "").length) {
            history.push("/", { replace: true });
        } else {
            SetQuery(q);
        }
    };
    const InputChanged = (q) => {
        SetQuery(q);
    };
    React.useEffect(() => {
        RetrieveQuery();
    }, []);
    React.useEffect(() => {
        RetrieveQuery();
    }, [query]);
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Ssebowa Search" />
                <div className="wrapper">
                    <div className="hero-shape1 navbar fixed-top">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/slider/shape/shape1.png`}
                            alt="shape"
                        />
                    </div>
                    <SearchHeader query={query} InputChanged={InputChanged} />
                    <SearchTypeHeader />
                    <SearchResults query={query} />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default SearchPage;
