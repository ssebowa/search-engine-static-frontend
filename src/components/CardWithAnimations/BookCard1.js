import React, { useState } from "react";
import CardFlip from "react-card-flip";
import "./BookCard.css";


import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";


import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});`
`


const BookCard1 = ({data}) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
      <div>
          {/*------------- Card ------------*/}
          <div className="card-mission" style={{ backgroundImage: `url(${data.img})` }}>
              <div className="card-mission-content">
                  <h2 className="card-mission-title">{data.title}</h2>
                  <p className="card-mission-body">{data.description}</p>
                  <button onClick={handleClickOpen} className="button-mission">
                      See More
                  </button>
              </div>
          </div>

          {/*------------- Dialogue ------------*/}
          {/* <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} >
              <AppBar sx={{ position: "relative" }}>
                  <Toolbar>
                      <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                          <CloseIcon />
                      </IconButton>
                      <Box>
                          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                              {data.collapse_title}
                          </Typography>
                      </Box>
                  </Toolbar>
              </AppBar>
              <Box sx={{ m: 4 }}>
                  <Typography color="#3d3d3c" dangerouslySetInnerHTML={{ __html: data.collapse_description }}></Typography>
              </Box>
          </Dialog> */}

          <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
              <DialogTitle variant="h5" color='#42F584' >{data.collapse_title}</DialogTitle>
              <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description" dangerouslySetInnerHTML={{ __html: data.collapse_description }}>
                      
                  </DialogContentText>
              </DialogContent>
             
          </Dialog>
      </div>
  );
}

export default BookCard1
