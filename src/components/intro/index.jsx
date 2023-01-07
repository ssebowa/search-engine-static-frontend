import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "../button";
import Parallax from "parallax-js";
import Logo from "../logo";
import SearchBarHome from "../searchbarhome/SearchBarHome";
import Bookmarks from "../Bookmarks/Bookmarks";

const Intro = ({ data }) => {
    return (
        <div className="hero-slider">
            <div className="container">
                <div className="flex-column w-100  justify-content-center d-flex align-items-center">
                    <div className="header-logo w-100 m-5 px-5 mb-10 justify-content-center d-flex align-items-center">
                        <Logo
                            classOption="d-block img-fluid d-flex align-items-center justify-content-center"
                            image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                        />
                    </div>

                    <SearchBarHome />
                    <Bookmarks />
                </div>
            </div>
        </div>
    );
};

Intro.propTypes = {
    data: PropTypes.object,
};

export default Intro;
