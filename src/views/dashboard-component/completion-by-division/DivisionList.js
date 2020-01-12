import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  Grid,
  Typography,
  ListItemAvatar,
  CircularProgress,
  LinearProgress,
  ListItemText,
  IconButton
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import mockData from './data';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const DivisionList = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [products] =useState(mockData.data);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Completion by Divisions"
      />
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {products.map((product, i) => (
            <ListItem
              divider={i < products.length - 1}
              key={product.id}
            >
                <Grid
                container
                justify="space-between"
                >
                    <Grid 
                      alignContent = "center"
                      item
                      xs = {4}
                    >
                        <Typography variant="h4">{product.name}</Typography>
                      <Typography variant="h5">{product.progress}%</Typography>
                        <ListItemAvatar>
                          <LinearProgress 
                              variant="determinate" 
                              value={product.progress} 
                              color="secondary"/>
                          </ListItemAvatar>
                    </Grid>

              </Grid>
              
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

DivisionList.propTypes = {
  className: PropTypes.string
};

export default DivisionList;