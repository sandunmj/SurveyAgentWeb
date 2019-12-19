import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  Divider,
  CardHeader,
  Grid
} from "@material-ui/core";
import Profiling from "./Profiling";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}));

const profilingInfo = [
  { key: 1, name: "Age Group", items: ["20 - 30", "30-40", "40-50", "50-60"] },
  { key: 2, name: "Years of Service", items: ["below 1 year", "1 - 2 years", "2 - 5 years", "more than 5 years"]},
  { key: 3, name: "Designation", items: ["manager","engineer", "cheif engineer", "employee"]},
  { key: 4, name: "Transportation", items: ["by bus","by train", "by own vehicle", "on foot"]},

];

const UserProfile = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          subheader="Please make checked only those wanted to show"
          title="User Profile information"
        ></CardHeader>
        <Divider />
        <CardContent>          
              <Profiling profilingInfo = {profilingInfo}/>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
