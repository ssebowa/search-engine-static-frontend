import React from "react";
import { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function SearchResultsImages({ query }) {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        fetch(`https://chatapi.ssebowa.org/image/?keyword=${query}`, {
            method: "post",
        })
            .then((response) => response.json())
            .then((data) => setImageUrls(data.images))
            .catch((error) => console.error(error));
    }, [query]);

    return (
        <div className="w-100">
            {imageUrls && (
                <ImageList sx={{ width: "100%", height: 450}} cols={6} variant="quilted" rowHeight={130}>
                    {imageUrls.map((string, index) => (
                        <ImageListItem key={index}>
                            <a href={string} style={{ textDecoration: "none" }}>
                                <img src={string} style={{ objectFit: "contain" }} loading="lazy" alt="img" />
                            </a>
                        </ImageListItem>
                    ))}
                </ImageList>
            )}
        </div>
    );
}

export default SearchResultsImages;
