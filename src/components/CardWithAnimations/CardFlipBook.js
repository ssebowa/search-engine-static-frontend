import React from 'react'

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./cardWithAnimations.css";
// import img1 from "./images/intro/support.jpg";


const CardFlipBook = () => {
  return (
      <>
          <Card variant="outlined" sx={{ width: 300, height: 350, ml: 10, borderRadius: 5 }} className="card2">
              <Box className="cover" sx={{ pt: 10, color: "#FFFF" }}>
                  <Typography variant="h4" align="center">
                      Hello
                  </Typography>
                  <Typography variant="h5" align="center">
                      lorem lorem
                  </Typography>
                  <Typography variant="h5" align="center">
                      lorem lorem
                  </Typography>
              </Box>
              <CardContent className="card-body2" sx={{ height: 295, width: 255, p: 4 }}>
                  <figure className="front">
                      <img src="./images/intro/support.jpg" alt="" />
                      <h1>Our Mission</h1>
                  </figure>
                  <figure className="back"></figure>
              </CardContent>
          </Card>
      </>
  );
}

export default CardFlipBook
