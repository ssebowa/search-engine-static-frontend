import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisV, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // ES6
import { Box, Button } from "@mui/material";

// import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { AiOutlineHome } from "react-icons/ai";

const GetBookmarks = () => {
    try {
        var data = localStorage.getItem("ssebowa-bookmarks");
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return 0;
        }
    } catch (e) {
        return false;
    }
};
const AddBookmark = (element) => {
    var bookmark = GetBookmarks();
    console.log(bookmark);
    var bookmark;
    if (bookmark !== 0 && bookmark !== false) {
        console.log(bookmark);
        bookmark.push(element);
        try {
            localStorage.setItem("ssebowa-bookmarks", JSON.stringify(bookmark));
        } catch (e) {
            console.log(e);
        }
    } else {
        bookmark = [];
        bookmark.push(element);
        try {
            localStorage.setItem("ssebowa-bookmarks", JSON.stringify(bookmark));
        } catch (e) {
            console.log(e);
        }
    }
};

const Bookmarks = () => {
    const [addNew, SetAddNew] = useState(false);
    const [BookmarksArray, SetBookmarks] = useState([]);
    const [BookmarkLoaded, SetBookmarkLoaded] = useState(false);

    const RenderBookmarks = () => {
        var data = GetBookmarks();
        if (data !== 0 && data !== false) {
            if (data.length === 0) {
                SetBookmarkLoaded(false);
                return 0;
            }
            SetBookmarks(data);
            SetBookmarkLoaded(true);
        } else {
            SetBookmarkLoaded(false);
        }
    };

    useEffect(() => {
        RenderBookmarks();
    }, []);

    const closeAddNewBookmark = () => {
        SetAddNew(!addNew);
    };
    return (
        <div>
            <div className="d-flex  justify-content-around  align-items-center">
                {/* <Box sx={{ backgroundColor: "white", color: "black", paddingLeft: 2, paddingRight: 2, paddingTop: 1, paddingBottom: 1, borderRadius: "8px" }}>
                    Bookmarks
                </Box> */}
                <button onClick={() => closeAddNewBookmark()} className="d-flex justify-content-center align-items-center p-1 ">
                    {addNew ? (
                        <>
                            <button
                                className=""
                                style={{ color: "white" }}
                                // variant="contained"
                                // sx={{
                                //     fontWeight: "bold",
                                //     color: "white",
                                //     backgroundColor: "white",
                                //     ":hover": {
                                //         backgroundColor: "lightgrey",
                                //     },
                                // }}
                                // size="large"
                            >
                                <ClearIcon></ClearIcon>
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            className="set-as"
                            style={{ color: "white" }}
                            // variant="contained"
                            // sx={{
                            //     fontWeight: "bold",
                            //     color: "White",
                            //     backgroundColor: "white",
                            //     ":hover": {
                            //         backgroundColor: "lightgrey",
                            //     },
                            // }}
                            // // size="large"
                        >
                            {/* <AddIcon></AddIcon> */}
                            <AiOutlineHome className="me-4"></AiOutlineHome>
                            Bookmark
                        </button>
                    )}
                </button>

                {/* <Box sx={{ backgroundColor: "white", color: "black", padding: 2, borderRadius: "20px" }}>Add</Box> */}
            </div>
            {/* <div>
                <img className="arrow-u" src="https://i.ibb.co/DMMqWwL/slazzer-edit-image-2-removebg-preview.png" alt="" />
            </div> */}
            {addNew ? (
                <div className="d-flex align-items-center justify-content-center w-100">
                    <AddNewBookmark cancelFxn={closeAddNewBookmark} rerenderFxn={RenderBookmarks} />
                </div>
            ) : (
                <div className="d-flex align-items-center justify-content-center flex-wrap">
                    {BookmarkLoaded ? (
                        BookmarksArray.map((item, index) => {
                            return (
                                <BookamarkButton key={index} name={item.name} image={item.image} link={item.link} id={item.id} rerenderFxn={RenderBookmarks} />
                            );
                        })
                    ) : (
                        <Box sx={{ borderRadius: "20px" }}>
                            {/* <p className="text-white text-center text-decoration-underline">
                                Add Bookmarks by pressing
                                <span className="fw-bold-lg"> + ADD </span> Button
                            </p> */}
                        </Box>
                    )}
                </div>
            )}
        </div>
    );
};

export default Bookmarks;

const BookamarkButton = ({ name, link, image, id, rerenderFxn }) => {
    const [editIt, SetEditIt] = useState(false);

    const removeIt = () => {
        var info_data = localStorage.getItem("ssebowa-bookmarks");
        var data = JSON.parse(info_data);
        var i = 0;
        var index = data.findIndex((item) => item.id === id);
        if (index !== -1) {
            data.splice(index, 1);
        }
        localStorage.setItem("ssebowa-bookmarks", JSON.stringify(data));
        SetEditIt(false);
        rerenderFxn();
    };
    return (
        <div className="BookamarkButton d-flex flex-column align-items-center justify-content-center">
            {editIt ? (
                <>
                    <button className="BookmarkBtnRemove text-white bg-danger p-1" style={{ borderRadius: 5 }} onClick={() => removeIt()}>
                        Remove
                    </button>
                    <button onClick={() => SetEditIt(false)} className="BookmarkBtnEdit text-white bg-dark p-1 mt-1" style={{ borderRadius: 5 }}>
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <button className="bookmarkEditBtn" onClick={() => SetEditIt(true)}>
                        <FontAwesomeIcon
                            icon={faEllipsisV}
                            className="p-1"
                            size="sm"
                            style={{
                                paddingHorizontal: 5,
                            }}
                        />
                    </button>
                    <a href={"//" + link} rel="noreferrer" target="_blank" className="d-flex flex-column align-items-center justify-content-center">
                        <img alt="Youtube" className="img-fluid bookmarkImage" src={image} />
                        <p className="text-dark w-100 overflow-hidden">{name}</p>
                    </a>
                </>
            )}
        </div>
    );
};

const AddNewBookmark = ({ cancelFxn, rerenderFxn }) => {
    const [link, SetLink] = useState("");
    const [name, SetName] = useState("");
    const [imageUrl, SetImageUrl] = useState(false);

    const LinkChanged = (e) => {
        if (e == "") {
            SetImageUrl(false);
            return 0;
        }
        SetLink(e);
        if (!/^https?:\/\//i.test(e)) {
            e = "https://" + e;
        }
        var favurl = "https://api.statvoo.com/favicon/?url=" + e;
        SetImageUrl(favurl);
    };
    const CancelEverything = () => {
        SetLink("");
        SetName("");
        SetImageUrl(false);
        cancelFxn();
    };
    const InitiateAddBookmark = () => {
        let x = Math.floor(Math.random() * 1000000 + 1000);
        var info = {
            id: x,
            name: name,
            link: link,
            image: imageUrl,
        };
        console.log(info);
        AddBookmark(info);
        CancelEverything();
        rerenderFxn();
    };

    return (
        <div className="AddNewBookmark mb-2">
            <h6 className="w-100 text-center fw-bolder mt-2 text-success">ADD BOOKMARK</h6>
            <div className="d-flex flex-column ">
                <div className="d-flex align-items-center justify-content-between">
                    <input className="inputBookmarkInput w-100" placeholder="Name your Bookmark" onChange={(e) => SetName(e.target.value)} value={name} />
                    {imageUrl ? <img src={imageUrl} alt={"new"} className="inputBookmarkPreviewImg" /> : <></>}
                </div>
                <input className="inputBookmarkInput" placeholder="Link of Website" onChange={(e) => LinkChanged(e.target.value)} />
            </div>

            <div className="d-flex align-items-center justify-content-evenly ">
                <button className="ButtonActionBookmark" onClick={() => InitiateAddBookmark()}>
                    <FontAwesomeIcon
                        icon={faPlus}
                        className="p-1 text-success"
                        size="lg"
                        style={{
                            paddingHorizontal: 2,
                        }}
                    />
                    <p className=" text-success">ADD</p>
                </button>
                <button className="ButtonActionBookmark" onClick={() => CancelEverything()}>
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="p-1 text-danger"
                        size="lg"
                        style={{
                            paddingHorizontal: 2,
                        }}
                    />
                    <p className=" text-danger">CANCEL</p>
                </button>
            </div>
        </div>
    );
};

AddNewBookmark.propTypes = {
    cancelFxn: PropTypes.func,
    rerenderFxn: PropTypes.func,
};
BookamarkButton.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    rerenderFxn: PropTypes.func,
};
