import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ResultMain({ data }) {
    console.log(data);
    // let url = data.pretty_url;
    // if (url.length > 10) url = url.slice(0, 30) + "...";

    return (
        <div className="d-flex justify-items-center justify-content-center">
            <div className="ResultMainConatiner" tabIndex="-1">
                <a target={"_blank"} rel="noreferrer" href={data.link} className="ResultMainUpperLink pe-3">
                    {data.link}
                </a>
                <a target={"_blank"} rel="noreferrer" href={data.link} className="ResultMainLink ">
                    <LinesEllipsis text={data.Title} maxLine="2" ellipsis="..." trimRight basedOn="letters" />
                    <br />
                </a>
                <p className="ResultMainDescription">
                    <LinesEllipsis text={data.Description} maxLine="4" ellipsis="..." trimRight basedOn="letters" />
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
