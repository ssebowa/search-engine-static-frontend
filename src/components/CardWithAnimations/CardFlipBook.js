import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        transition: "transform 0.2s",
        position: "relative",
        overflow: "hidden",
    },
    media: {
        height: 140,
    },
    back: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        transition: "transform 0.6s",
        transform: "rotateY(180deg)",
    },
    front: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        transition: "transform 0.6s",
    },
});

const CardFlipBook = () => {
    const classes = useStyles();
    const [flip, setFlip] = useState(false);
    const { transform, opacity } = useSpring({
        transform: `rotateY(${flip ? 180 : 0}deg)`,
        opacity: flip ? 0 : 1,
    });

    return (
        <>
            <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deserunt eaque similique sit consectetur. Officia quo enim natus! Corrupti
                distinctio temporibus ducimus commodi fuga nisi est laboriosam quibusdam, eius illo!
            </h1>
            <Card className={classes.root} onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)}>
                <animated.div className={classes.front} style={{ transform, opacity }}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="/path/to/bookcover.jpg" title="Book Cover" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Book Title
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Book Description
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </animated.div>
                <animated.div className={classes.back} style={{ transform: transform.interpolate((t) => `${t} rotateY(180deg)`), opacity }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Next Page Title
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Next Page Description
                        </Typography>
                    </CardContent>
                </animated.div>
            </Card>
        </>
    );
};

export default CardFlipBook;
