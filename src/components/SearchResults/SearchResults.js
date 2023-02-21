import React, { useEffect } from "react";
import InfoBoxes from "./InfoBoxes";
import ResultMain, { SearchSuggestions } from "./ResultMain";
import PropTypes from "prop-types";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import { BASEURL } from "../../connection/BaseUrl";
import Newapi from "./Newapi";

function SearchResults({ query }) {
    const [search_results, SetSearch_Results] = React.useState([]);
    const [array_search_results, SetArraySearch_Results] = React.useState([]);
    const [Results_State, SetResults_State] = React.useState(false);
    const [Results_Error, SetResults_Error] = React.useState(false);

    const [MWMBLE_Results, SetSerachMWMBleResults] = React.useState([]);

    const [SsebowaResults, SetSsebowaResults] = React.useState([]);

    const [Combine_Results, SetCombineResults] = React.useState([]);

    const FetchSearchQuery = () => {
        console.log("Fetching...");
        SetResults_State(false);
        SetResults_Error(false);
        var f_url = BASEURL + "search";
        try {
            fetch(f_url, {
                method: "GET",
                mode: "cors",
                headers: {
                    query: query,
                },
            })
                .then((r) => r.json())
                .then((r) => {
                    console.log(r);
                    SetSearch_Results(r);
                    SetArraySearch_Results(r.results);
                    console.log("🚀 ~ file: SearchResults.js:36 ~ .then ~ r.results:", r.results);
                    // console.log(search_results);
                    const timer = setTimeout(() => {
                        SetResults_State(true);
                    }, 1000);
                    return () => clearTimeout(timer);
                })
                .catch((e) => {
                    console.log("Fetch Error", e);
                    SetResults_Error(true);
                });
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        FetchSearchQuery();
    }, [query]);

    let x;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://api.mwmbl.org/search?s=${query}`);
                // console.log(response.data);
                SetSsebowaResults(response.data);
            } catch (error) {
                console.log(`Error in fetching data: ${error.message}`);
            }
        }

        fetchData();

        return () => {
            // Clean up function
        };
    }, [query]);

    if (Results_State) {
        return (
            <div>
                <div className="SearchResultsMain">
                    <div className="SearchResultsInnerLeft ">
                        <p className="text-dark mt-2">About {search_results?.number_of_results} results</p>
                        {search_results?.results?.map((item, i) => {
                            return <ResultMain key={i} data={item} />;
                        })}
                    </div>

                    <div className="SearchResultsInnerRight">
                        {search_results?.infoboxes?.map((item, i) => {
                            return (
                                <>
                                    <InfoBoxes key={i} data={item} />
                                </>
                            );
                        })}
                    </div>
                </div>
                <div>
                    {SsebowaResults?.map((ssebowa) => {
                        return <Newapi key={ssebowa._id} ssebowa={ssebowa} />;
                    })}
                </div>
            </div>
        );
    } else if (!Results_State) {
        return !Results_Error ? (
            <div className="w-100 d-flex align-items-center justify-content-center" style={{ height: "70vh" }}>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={["#59e3a7", "#118442", "#181C51", "#59e3a7", "#118442"]}
                />
            </div>
        ) : (
            <div className="w-100 d-flex align-items-center justify-content-center flex-column" style={{ height: "70vh" }}>
                <h6 className="text-danger fw-bold mb-5"> An Error Occured </h6>
                <button onClick={() => FetchSearchQuery()} type="button" className="btn btn-primary">
                    Retry
                </button>
            </div>
        );
    }
}

export default SearchResults;

SearchResults.propTypes = {
    query: PropTypes.string,
};
