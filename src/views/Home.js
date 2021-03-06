import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    paddingTop: 150,
    textAlign: 'center',
    paddingBottom: 300,
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        spacing={4}
      >
        <Grid
          item
          lg={6}
          xs={12}
        >
          <div className={classes.content}>
            <Typography variant="h1">
              Welcome to Survey Agent
            </Typography>
            <Typography variant="subtitle2">
              Welcome to Survey Agent. You can make surveys customizing everything on your hands. Enjoy now!
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
