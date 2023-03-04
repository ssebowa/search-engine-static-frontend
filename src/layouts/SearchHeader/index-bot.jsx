import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MenuForSearch } from "../../components/menu/main-menu";
import MobileMenu from "../../components/menu/mobile-menu";

function SearchBotHeader() {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const history = useHistory();
    const [inputVal, SetInputVal] = React.useState("");
    const onCanvasHandler = () => {
        setOffcanvasShow((prev) => !prev);
    };
    const RetrieveQuery = () => {
        var h = window.location.href;
        var q = h.split("bot?q=")[1];
        if (q === undefined || q === "" || q === " ") {
            console.log("undefined");
        } else {
            SetInputVal(decodeURIComponent(q));
        }
    };
    useEffect(() => {
        RetrieveQuery();
    }, []);
    const onChangeInput = (e) => {
        SetInputVal(e.target.value);
    };
    const SubmitSearchRequest = (e) => {
        e.preventDefault();
        if (inputVal.replace(/\s/g, "").length) {
            history.push("/search?q=" + inputVal, { replace: true });
        }
    };
    return (
        <div className="SearchHeaderMain section position-relative">
            <div className="d-flex align-items-center searchMainZIndex searchMainDivContent ">
                <a href={"/"}>
                    <img
                        className="d-block img-fluid SsebowaLogoImage"
                        alt="logo"
                        src={`https://res.cloudinary.com/dicgvondb/image/upload/v1674668332/ssebowa/ssebowa.org/search-engine-static-frontend/images/logo/logo_jybeu2.png`}
                    />
                </a>
                <form className="d-flex align-items-center  SearchBarMainPageForm" onSubmit={(e) => SubmitSearchRequest(e)}>
                    <input
                        type="search"
                        className="SearchBarMainPage fw-bold"
                        placeholder="Search here..."
                        value={inputVal}
                        onChange={(e) => onChangeInput(e)}
                    />
                    <button className="SearchBarMainButton" type="submit">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className=""
                            size="lg"
                            style={{
                                color: "#000",
                                paddingLeft: 10,
                            }}
                        />
                    </button>
                </form>
            </div>
            <div className="w-25 searchMainZInde searchMenuRight">
                <MenuForSearch />
            </div>
            <div className="searchMenuRightMobileMenu h-100 d-flex align-items-center">
                <button className="toggle d-flex align-items-center flex-column mb-2" onClick={onCanvasHandler}>
                    <span className="icon-top"></span>
                    <span className="icon-middle"></span>
                    <span className="icon-bottom"></span>
                </button>
                <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
            </div>
        </div>
    );
}

export default SearchBotHeader;
