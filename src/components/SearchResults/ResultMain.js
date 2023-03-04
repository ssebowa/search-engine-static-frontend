import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ResultMain({ data }) {
    return (
        <div className="pt- pb-5 pe-5 ms-sm-5 d-flex justify-items-center justify-content-center">
            <div className="ResultMainConatiner pt-5" tabIndex="-1">
                <a target={"_blank"} rel="noreferrer" href={data.pretty_url} className="ResultMainUpperLink pe-3">
                    {data.pretty_url}
                </a>
                <a target={"_blank"} rel="noreferrer" href={data.pretty_url} className="ResultMainLink ">
                    <LinesEllipsis text={data.title} maxLine="2" ellipsis="..." trimRight basedOn="letters" />
                    <br />
                </a>
                <p className="ResultMainDescription">
                    <LinesEllipsis text={data.content} maxLine="4" ellipsis="..." trimRight basedOn="letters" />
                </p>
            </div>
        </div>
    );
}

export default ResultMain;

export const SearchSuggestions = ({ data, ssebowa }) => {
    // console.log(ssebowa);
    return (
        <div className="SearchSuggestions p-2">
            <p className="text-dark fw-bold">Suggestions</p>
            <ul>
                {data?.map((item, i) => {
                    return (
                        <li className="SearchSuggestionsLink" key={i}>
                            <a href={"/search?q=" + item}>{item}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

ResultMain.propTypes = {
    data: PropTypes.object,
};

SearchSuggestions.propTypes = {
    data: PropTypes.object,
};
