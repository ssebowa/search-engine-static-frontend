import React,{useState, useEffect} from 'react';

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import { Link } from 'react-router-dom';

function SearchResultsVideos({query}) {

    const [videoUrls, setVideoUrls] = useState([]);

    

   

    useEffect(() => {
        fetch(`https://chatapi.ssebowa.org/get_video?keyword=${query}`, {
            method: "post",
        })
            .then((response) => response.json())
            .then((data) => setVideoUrls(data.video))
            .catch((error) => console.error(error));
    }, [query]);


    return (
        <div>
            {videoUrls && (
                <List>
                    {videoUrls.map((videoInfo, index) => (
                        <>
                            {" "}
                            <Card
                                key={index}
                                sx={{
                                    display: "flex",
                                    marginRight: "auto",
                                    width: "96%",
                                    height: "25vh",
                                    m: 2,
                                    p: 2,
                                }}
                            >
                                <a href={videoInfo.link} style={{ textDecoration: "none" }}>
                                    <CardMedia component="img" image={videoInfo.tump_img} sx={{ width: "200px", p:1 }} />
                                </a>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",

                                        width: "100%",
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            flex: "flex",
                                            textAlign: "left",
                                        }}
                                    >
                                        <a href={videoInfo.link} style={{ textDecoration: "none" }}>
                                            <Typography component="div" variant="h5" sx={{ color: "blue" }}>
                                                {videoInfo.title}
                                            </Typography>
                                        </a>
                                        <Typography component="h6" variant="h6" sx={{ color: "text.secondary" }}>
                                            {videoInfo.channel_name}
                                        </Typography>

                                        <Typography component="span" variant="h6">
                                            {videoInfo.video_platform}
                                            <span> </span>
                                        </Typography>
                                        <Typography component="span" variant="small" sx={{ color: "info.main" }}>
                                            <span> </span> {videoInfo.date}
                                        </Typography>
                                        <Typography component="div" variant="h6" sx={{ color: "text.secondary" }}>
                                            <span>views:</span> {videoInfo.views}
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                                        <Typography></Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </>
                    ))}
                </List>
            )}
        </div>
    );
}

export default SearchResultsVideos;