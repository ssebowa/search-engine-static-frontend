import React, { useState } from "react";
import NavBarFooter from "../components/NavBarFooter/NavBarFooter";
import ScrollToTop from "../components/scroll-to-top";
import SearchResults from "../components/SearchResults/SearchResults";
import SearchResultsImages from "../components/SearchResults/SearchResultsImages";
import SearchTypeHeader from "../components/SearchResults/SearchTypeHeader";
import SEO from "../components/seo";
import StickyChatBot from "../components/stickyChatBot";
import Layout from "../layouts/index";
import SearchHeader from "../layouts/SearchHeader";

const SearchPage = () => {
    const [query, SetQuery] = React.useState("");
    const [searchType, setSearchType] = useState("general");

    const handleSearchType = (value) => {
        setSearchType(value);
        console.log(value);
    };

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
                        <img src={`${process.env.PUBLIC_URL}/images/slider/shape/shape1.png`} alt="shape" />
                    </div>
                    <SearchHeader query={query} InputChanged={InputChanged} />
                    <SearchTypeHeader handleSearchType={handleSearchType} />
                    {searchType === "general" ? (
                        <>
                            <SearchResults query={query} />
                        </>
                    ) : searchType === "images" ? (
                        <>
                            <SearchResultsImages query={query}></SearchResultsImages>
                        </>
                    ) : (
                        <></>
                    )}
                    <NavBarFooter></NavBarFooter>
                    <ScrollToTop />
                    <StickyChatBot />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default SearchPage;
