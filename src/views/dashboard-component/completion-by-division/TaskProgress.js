import React, {useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  ListItem,
  Typography,
  Avatar,
  List,
  LinearProgress
} from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import data from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  progress: {
    marginTop: theme.spacing(3)
  }
}));

const TasksProgress = props => {
  const { className, ...rest } = props;

  const classes = useStyles();


  return (
    
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <List>
          <ListItem>
            <Grid
              container
              justify="space-between"
            >
              <Grid item>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                  variant="body2"
                >
                  Completion By Division
                </Typography>
                <Typography variant="h4">HR</Typography>
                <Typography variant="h3">75.5%</Typography>
              </Grid>
            </Grid> 
          </ListItem>
          <LinearProgress
                className={classes.progress}
                value={75.5}
                variant="determinate"
              />
          <ListItem>
          <Grid
            container
            justify="space-between"
          >
            <Grid item>
              <Typography variant="h4">Marketing</Typography>
              <Typography variant="h3">79.5%</Typography>
            </Grid>
          </Grid>
          </ListItem>
          <LinearProgress
              className={classes.progress}
              value={75.5}
              variant="determinate"
            />
        </List>
      </CardContent>
    </Card>
  );
};

TasksProgress.propTypes = {
  className: PropTypes.string
};

export default TasksProgress;
