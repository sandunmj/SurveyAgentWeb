import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import fire from "../../firebase/firebase-config";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  FormControl,
  MenuItem,
  InputLabel,
  Divider,
  Select,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { grey } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

const Selection = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [surveyList] = React.useState();
  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const getSurvey = () =>{
    fire.database().ref("surveys").once('value').then(function(snapshot) {
      var surveys = snapshot.val();
      this.surveyList = Object.keys(surveys);
    });
  };

  return (
    <Card
      {...rest}
      className={clsx(className)}
    >
      <CardHeader
        action={
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={age}
              varient = 'outlined'
              onChange={handleChange}
            >
              {/* {this.surveyList.map(list =>(
                <option key={list} value = {list}>
                  {list}
                </option>
              ))} */}
              <MenuItem value={10}>Survey 1</MenuItem>
              <MenuItem value={20}>Survey 2</MenuItem>
              <MenuItem value={30}>Survey 3</MenuItem>
            </Select>
          </FormControl>
        }
        title="Survey"
      />
    </Card>
  );
};

Selection.propTypes = {
  className: PropTypes.string
};

export default Selection;
