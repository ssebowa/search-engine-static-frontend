import { faMagnifyingGlass, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function SearchTypeHeader({ handleSearchType }) {
    const changeSearchType = (value) => {
        handleSearchType(value);
    };

    return (
        <div className="SearchTypeHeaderMain">
            <div className="SearchTypeHeaderInner">
                {/* <ButtonForType icon={faMagnifyingGlass} text={"General"} active={true} commingSoon={false} /> */}
                {/* <ButtonForType onClick={changeSearchType} icon={faImages} text={"Images"} active={true} commingSoon={false} />  */}

                <Button variant="outlined" onClick={() => changeSearchType("general")}>
                    General
                </Button>
                <Button variant="outlined" sx={{ mx: 1 }} onClick={() => changeSearchType("images")}>
                    Images
                </Button>
                {/*    <ButtonForType
                    icon={faPlayCircle}
                    text={"Videos"}
                    active={false}
                    commingSoon={true}
                />
                <ButtonForType
                    icon={faNewspaper}
                    text={"News"}
                    active={false}
                    commingSoon={true}
                />
                <ButtonForType
                    icon={faMapMarkedAlt}
                    text={"Map"}
                    active={false}
                    commingSoon={true}
                /> */}
            </div>
        </div>
    );
}

export default SearchTypeHeader;

const ButtonForType = ({ active, icon, text, commingSoon }) => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Comming Soon
        </Tooltip>
    );

    if (commingSoon) {
        return (
            <>
                <OverlayTrigger placement="bottom" delay={{ show: 0, hide: 0 }} overlay={renderTooltip}>
                    <button disabled={commingSoon ? true : false} className="SearchTypeHeaderButton SearchTypeHeaderButton-Disabled">
                        <div className="SearchTypeHeaderButton-Disabled-Overlay"></div>
                        <FontAwesomeIcon
                            icon={icon}
                            size="sm"
                            style={{
                                paddingLeft: 5,
                                paddingRight: 5,
                            }}
                        />{" "}
                        {text}
                    </button>
                </OverlayTrigger>
            </>
        );
    }

    return (
        <>
            <button
                disabled={commingSoon ? true : false}
                className={active ? "SearchTypeHeaderButton SearchTypeHeaderButton-Active" : "SearchTypeHeaderButton"}
            >
                <FontAwesomeIcon
                    icon={icon}
                    size="sm"
                    style={{
                        paddingLeft: 5,
                        paddingRight: 5,
                    }}
                />{" "}
                {text}
            </button>
        </>
    );
};

ButtonForType.propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.node,
    text: PropTypes.string,
    commingSoon: PropTypes.bool,
};
