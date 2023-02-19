import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types"; // ES6
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { BASEURL } from "../../connection/BaseUrl";

function SearchBarForNavbar() {
    const history = useHistory();
    const [inputVal, SetInputVal] = React.useState("");
    const [SuggestionReady, SetSuggestionReady] = React.useState(false);
    const [Suggestions, SetSuggestions] = React.useState([]);

    const location = useLocation();
    console.log(location.pathname);

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
        <div className="w-75 d-flex flex-column align-items-center">
            <div className="mainSearchBarMainDiv100 ">
                {/* <form
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
                            marginRight: "auto",
                            marginLeft: 10,
                        }}
                    />
                    <input
                        type="text"
                        className="mainSearchBar"
                        value={inputVal}
                        placeholder="Search the web to plant trees..."
                        onChange={(e) => onChangeInput(e)}
                    />
                    <button
                        style={{
                            backgroundColor: "green",
                            height: "100%",
                        }}
                    >
                        Sub
                    </button>
                </form> */}
                {
                    <Form
                        method="NONE"
                        className="d-flex m-5 py-1"
                        style={{
                            width: "50vw",
                            maxWidth: "300px",
                            minWidth: "100px",
                            height: "80%",
                            maxHeight: "50px",
                        }}
                        onSubmit={(e) => SubmitSearchRequest(e)}
                    >
                        <Form.Control
                            type="text"
                            className="me-1 fs-6"
                            aria-label="Search"
                            style={{
                                width: "80%",
                                maxWidth: "300px",
                                minWidth: "130px",
                                borderRadius: "20px 10px 10px 20px",
                            }}
                            value={inputVal}
                            placeholder="Search the web to plant trees..."
                            onChange={(e) => onChangeInput(e)}
                        />

                        <Button
                            variant="success"
                            className=" d-flex justify-content-center align-items-center"
                            style={{
                                width: "10%",
                                minWidth: "6px",
                                borderRadius: "10px 18px 18px 10px",
                            }}
                            type="submit"
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-light me-1" size="md" />
                        </Button>
                    </Form>
                }

                {SuggestionReady ? (
                    <div className="mainSearchBarSuggestionDiv d-flex flex-column align-items-center justify-content-start">
                        {Suggestions.length !== 0 ? (
                            <>
                                {Suggestions?.map((item, i) => {
                                    return <SuggestSpan name={item} key={i} />;
                                })}
                            </>
                        ) : (
                            <div className="d-flex w-100 align-items-center justify-content-center" style={{ height: "100%" }}>
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

export default SearchBarForNavbar;

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
