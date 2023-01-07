import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"; // ES6
import { useHistory } from "react-router-dom";
import { BASEURL } from "../../connection/BaseUrl";

function SearchBarHome() {
    const history = useHistory();
    const [inputVal, SetInputVal] = React.useState("");
    const [SuggestionReady, SetSuggestionReady] = React.useState(false);
    const [Suggestions, SetSuggestions] = React.useState([]);

    var fetchUrl = BASEURL + "autocomplete-ssebowa/";
    const FetchSuggestions = (value) => {
        fetch(fetchUrl, {
            method: "POST",
            headers: {
                query: value,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((response) => {
                var sugg = response;
                console.log(sugg);
                SetSuggestionReady(true);
                SetSuggestions(sugg[1]);
            })
            .catch((err) => {
                var error = { status: "error", error: err };
                console.error(error);
                SetSuggestionReady(false);
            });
    };

    const onChangeInput = (e) => {
        SetInputVal(e.target.value);
        if (e.target.value.replace(/\s/g, "").length) {
            FetchSuggestions(e.target.value);
        } else {
            SetSuggestionReady(false);
            SetSuggestions([]);
        }
        if (inputVal === "") {
            SetSuggestionReady(false);
            SetSuggestions([]);
        }
    };
    const SubmitSearchRequest = (e) => {
        e.preventDefault();
        if (inputVal.replace(/\s/g, "").length) {
            history.push("/search?q=" + inputVal, { replace: true });
        }
    };
    return (
        <div className="w-90 d-flex flex-column align-items-center">
            <div className="mainSearchBarMainDiv ">
                <form
                    method="NONE"
                    className="mainSearchBarForm"
                    onSubmit={(e) => SubmitSearchRequest(e)}
                >
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="text-dark"
                        size="lg"
                        style={{
                            color: "#59e3a7",
                            paddingLeft: 10,
                        }}
                    />
                    <input
                        type="text"
                        className="mainSearchBar"
                        value={inputVal}
                        placeholder="Search here..."
                        onChange={(e) => onChangeInput(e)}
                    />
                </form>
                {SuggestionReady ? (
                    <div className="mainSearchBarSuggestionDiv d-flex flex-column align-items-center justify-content-start">
                        {Suggestions.length !== 0 ? (
                            <>
                                {Suggestions?.map((item, i) => {
                                    return <SuggestSpan name={item} key={i} />;
                                })}
                            </>
                        ) : (
                            <div
                                className="d-flex w-100 align-items-center justify-content-center"
                                style={{ height: "100%" }}
                            >
                                <p className="text-danger">No results Found</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default SearchBarHome;

const SuggestSpan = ({ name }) => {
    return (
        <span className="mainSearchBarSuggestionSpan">
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="pt-1 pl-1"
                size="sm"
                style={{
                    color: "#59e3a7",
                    paddingHorizontal: 5,
                }}
            />{" "}
            {name}
        </span>
    );
};

SuggestSpan.propTypes = {
    name: PropTypes.string,
};
