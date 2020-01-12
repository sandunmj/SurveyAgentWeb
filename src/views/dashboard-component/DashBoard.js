import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, card, CardHeader, IconButton, CardContent, Divider } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import clsx from 'clsx';
import UserByCompletion from './UsersByCompletion';
import DivisionList from './completion-by-division/DivisionList';
import Selection from './selection';
import TitleOverall from './title-wise-analysis/TitleOverall';
import TitleDivision from './title-wise-analysis/division/TitleDivision';
import TitleAgeGroup from './title-wise-analysis/age-group/TitleAgeGroup';
import TitleLocation from './title-wise-analysis/location/TitleLocation';
import QuestionOverall from './question-wise-analysis/QuestionOverall';
import QuestionDivision from './question-wise-analysis/division/QuestionDivision';
import QuestionLocation from './question-wise-analysis/location/QuestionLocation';
import AllQuestion from './question-wise-analysis/all-question/AllQuestion';
import QuestionAgeGroup from './question-wise-analysis/age-group/QuestionAgeGroup';
import QSelection from './question-wise-analysis/QSelection';
import category from './question-wise-analysis/Category';
import Category from './question-wise-analysis/Category';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: '#f5f5ef',
  },
  containers:{
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

const DashBoard = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <Selection />
        </Grid>
      </div>
      <div className={classes.root}>
        <h3>Overall Participation</h3>
        <Grid
          container
          spacing={4}
        >
          <Grid
            className = {classes.containers}
            item
            // lg={4}
            // md={6}
            // xl={3}
            sm = {6}
            xs={12}
          >
            <UserByCompletion />
          </Grid>
          <Grid
            item
            // lg={4}
            // md={6}
            // xl={3}
            sm = {6}
            xs={12}
          >
            <DivisionList />
          </Grid>
        </Grid>
        <Divider />
      </div>
      <div className={classes.root}>
        <h3>Titlewise Analysis</h3>
        <Grid
        justify="center"
        alignItems="center"
          container
          spacing={4}
        >
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <TitleOverall />
          </Grid>
          
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <TitleDivision />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <TitleAgeGroup />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <TitleLocation />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <h3>Questionwise Analysis</h3>
        <Grid
        justify="center"
        alignItems="center"
          container
          spacing={4}
        >
          <Grid
            item
            sm={6}
            xs={12}
          >
            <Category />
          </Grid>
          <Grid
            item
            sm = {6} 
            xs={12}
          >
            <QSelection />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid
          justify="center"
          alignItems="center"
          container
          spacing={4}
        >
          <Grid
            item
            xs={8}
          >
            <QuestionOverall />
          </Grid>
          <Grid
            item
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <QuestionDivision />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <QuestionAgeGroup />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <QuestionLocation />
          </Grid>
          <Grid
            xs
          >
            <AllQuestion />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default DashBoard;