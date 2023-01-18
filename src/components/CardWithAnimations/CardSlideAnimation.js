import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./cardWithAnimations.css";

function CardSlideAnimation({ data }) {
    return (
        <React.Fragment>
            <Card
                variant="outlined"
                sx={{ width: 300, height: 350, backgroundImage: `url(${data.icon})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                className="card mx-5 p-3"
            >
                <CardContent sx={{ p: 4 }} className="card-body">
                    <Typography variant="h4" component="div">
                        {data.title}
                    </Typography>
                    <Typography sx={{ mb: 3 }}>lorem</Typography>
                    <Typography variant="body2">{data.excerpt}</Typography>
                    <CardActions sx={{ mt: 2 }}>
                        {/* <Button
                            size="medium"
                            sx={{
                                padding: "10px 20px",
                                width: 120,
                                background: "#8fabba",
                                fontSize: 14,
                                fontWeight: 500,
                                color: "#1f3d47",
                                transition: "all 0.2s ease-in-out",
                                cursor: "pointer",
                                textTransform: "none",
                                "&:hover": {
                                    backgroundColor: "#4CAF50",
                                    color: "#fff",
                                },
                                btnPrimary: {
                                    backgroundColor: "#4CAF50",
                                    color: "#fff",
                                    "&:hover": {
                                        backgroundColor: "#4CAF50",
                                        color: "#fff",
                                    },
                                },
                            }}
                        >
                            Button
                        </Button> */}
                    </CardActions>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}

export default CardSlideAnimation;
