/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types"; // ES6
import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { BASEURL } from "../../connection/BaseUrl";
import Bookmarks from "../Bookmarks/Bookmarks";
import SideVideo from "./SideVideo/SideVideo";

function SearchBarHome() {
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

    useEffect(() => {
        if (SuggestionReady) {
            window.addEventListener("click", function (e) {
                if (document.getElementById("suggestBox") && document.getElementById("suggestBox")?.contains(e.target)) {
                    // Clicked in box
                } else {
                    SetSuggestionReady(false);
                }
            });
        }
    }, [SuggestionReady]);

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
    const SubmitSearchRequest = (e = false, text = "") => {
        let searchText = text;
        if (text === "") searchText = inputVal;
        if (e) e.preventDefault();
        if (searchText.replace(/\s/g, "").length) {
            history.push("/search?q=" + searchText, { replace: true });
        }
    };
    return (
        <div className="w-100 d-flex flex-column align-items-center">
            <img src="https://i.ibb.co/2SRRBdJ/logo-jybeu2-png.png" alt="" />
            <h1 className="text-white banner-text">
                The World’s Most <span style={{ color: "#40AF04" }}>Private</span> Search Engine
            </h1>
            <div>
                <SideVideo></SideVideo>
            </div>
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
                {location.pathname != "/" ? (
                    <>
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
                                className="me-1"
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
                                variant="success "
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
                    </>
                ) : (
                    <>
                        <Form
                            className="d-flex m-3 p-1  align-items-center justify-content-center serch-focus"
                            style={{
                                width: "80vw",
                                height: "100%",
                                maxHeight: "200px",
                            }}
                            onSubmit={(e) => SubmitSearchRequest(e)}
                        >
                            <div className="search-imgbox">
                                <img className="search-img" src="https://i.ibb.co/XZwQzvw/Vector-1.png" alt="" />
                            </div>

                            <Form.Control
                                type="text"
                                className="me-1 serch-input"
                                aria-label="Search"
                                style={
                                    {
                                        // padding: "0",
                                        // width: "100%",
                                        // maxWidth: "450px",
                                        // minWidth: "110px",
                                        // borderRadius: "0 12px 12px 100px",
                                    }
                                }
                                // home
                                value={inputVal}
                                placeholder="Search the web to plant trees..."
                                onChange={(e) => onChangeInput(e)}
                            />

                            <Button
                                // variant="success "
                                type="submit"
                                className="  d-flex justify-content-center align-items-center search-text"
                                style={{
                                    width: "2px",
                                    // height: "50%",
                                    borderRadius: "0 100px 100px 0",
                                    position: "relative",
                                    right: "5px",
                                    backgroundColor: "#40AF04",
                                    border: "none",
                                }}
                            >
                                <div className="">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-light me-2" size="lg" />
                                </div>
                            </Button>
                        </Form>
                    </>
                )}

                {SuggestionReady ? (
                    <div id="suggestBox" className="mainSearchBarSuggestionDiv d-flex flex-column align-items-center justify-content-start">
                        {Suggestions.length !== 0 ? (
                            <>
                                {Suggestions?.map((item, i) => {
                                    return <SuggestSpan name={item} key={i} SubmitSearchRequest={SubmitSearchRequest} />;
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

            <div className="d-flex justify-content-center">
                <div className="set-asposition">
                    <div className="d-flex justify-content-center">
                        <h1 className="text-white banner-text me-3 chrome">+</h1>
                        <h1 className="text-white banner-text me-3 chrome">Add To Browser</h1>
                        <h1 className="text-white">|</h1>

                        {/* <h1 className="text-white banner-text ms-5 mt-3 mt-sm-2">
                    <AiOutlineHome></AiOutlineHome>
                </h1> */}
                        {/* <h1 className="text-white banner-text ms-4 mt-3 mt-sm-2">Set As Home</h1> */}
                    </div>
                </div>
                <div className="book-margin">
                    <Bookmarks></Bookmarks>
                </div>
            </div>
        </div>
    );
}

export default SearchBarHome;

const SuggestSpan = ({ name, SubmitSearchRequest }) => {
    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <span
            onClick={(e) => {
                SubmitSearchRequest(false, name);
            }}
            className="mainSearchBarSuggestionSpan"
        >
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
