import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
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

const QSelection = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
              <MenuItem value={10}>question 1</MenuItem>
              <MenuItem value={20}>question 2</MenuItem>
              <MenuItem value={30}>question 3</MenuItem>
            </Select>
          </FormControl>
        }
        title="Question"
      />
    </Card>
  );
};

QSelection.propTypes = {
  className: PropTypes.string
};

export default QSelection;
