import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./cardWithAnimations.css";

import { makeStyles } from "@material-ui/styles";
import { ClassNames } from "@emotion/react";

const useStyles = makeStyles(() => ({
   
 card: {
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
      //You can add your background color or image here
    transition: 'filter 0.2s',
    '&:hover': {
      filter: 'blur(20px)',
    },}

}));

function CardSlideAnimation({ data }) {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Card
                elevation={4}
                variant="outlined"
                sx={{ width: 300, height: 350, backgroundImage: `url(${data.icon})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                className="card-animation mx-5 p-3"
              
            >
                
                    <CardContent sx={{ p: 4 }} className="card-animation-body">
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
