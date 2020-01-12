import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { HorizontalBar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { data, options } from './data';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative',
    backgroundColor: '#f5f5ef',
  },
  title:{
    
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const AllQuestion = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        className = {classes.title}
        title="Analysis of All Questions"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <HorizontalBar
            data={data}
            options={options}
          />
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          Overview <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

AllQuestion.propTypes = {
  className: PropTypes.string
};

export default AllQuestion;
