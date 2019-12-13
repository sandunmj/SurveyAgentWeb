import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Button,
  Typography
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { IgrDoughnutChartModule } from "igniteui-react-charts/ES5/igr-doughnut-chart-module";
import { IgrDoughnutChart } from "igniteui-react-charts/ES5/igr-doughnut-chart";
import { IgrRingSeriesModule } from "igniteui-react-charts/ES5/igr-ring-series-module";
import { IgrRingSeries } from "igniteui-react-charts/ES5/igr-ring-series";
import Selection from './QSelection';
IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: theme.palette.icon
  }
}));

const QuestionOverall = props => {
  const { className, ...rest } = props;
  const data = [
    { Value: 30, Label: "0-25",    },
    { Value: 15, Label: "25-50", },
    { Value: 30, Label: "50-75",     },
    { Value: 25, Label: "75-100",   },
];
  const classes = useStyles();
  const theme = useTheme();
    const onSliceClick = () =>{
        console.log(data.Value);
   };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Overall Progress"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
        <IgrDoughnutChart  
            height="100%" 
            width="100%"
            allowSliceSelection="true"
            sliceClick={onSliceClick}>
                  <IgrRingSeries
                      name="ring1"
                      dataSource={data}
                      labelMemberPath="Label"
                      valueMemberPath="Value"/>
                </IgrDoughnutChart>
        </div>
     {/* <div className={classes.stats}>
          {devices.map(device => (
            <div
              className={classes.device}
              key={device.title}
            >
              <span className={classes.deviceIcon}>{device.icon}</span>
              <Typography variant="body1">{device.title}</Typography>
              <Typography
                style={{ color: device.color }}
                variant="h2"
              >
                {device.value}%
              </Typography>
            </div>
          ))}
        </div>  */}
      </CardContent>
    </Card>
  );
};

QuestionOverall.propTypes = {
  className: PropTypes.string
};

export default QuestionOverall;
