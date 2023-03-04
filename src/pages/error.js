
import { ErrorOutlineOutlined } from '@mui/icons-material';
import { Container, Link, Typography } from '@mui/material';
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import NavBarUpdated2 from '../components/NavBarUpdated/NavBarUpdated2';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  icon: {
    fontSize: '10rem',
    color: theme.palette.error.main,
    marginBottom: theme.spacing(3),
  },
  message: {
    marginBottom: theme.spacing(2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));


const ErrorPage = () => {

  const classes = useStyles();

  return (
      <Container className={classes.container} sx={{pt: 20}} >
        <NavBarUpdated2></NavBarUpdated2>
          <ErrorOutlineOutlined className={classes.icon} />
          <Typography variant="h5" className={classes.message}>
              Sorry, there seems to be an error.
          </Typography>
          <Typography variant="subtitle1">
              Please try again later or go back to the{" "}
              <Link href="/" className={classes.link}>
                  home page
              </Link>
          </Typography>
      </Container>
  );
}

export default ErrorPage;
