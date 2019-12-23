import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, Divider, Button } from "@material-ui/core";
import { SurveyContext } from "../../../Providers/Survey";
import GroupCard from "../../user-group/GroupCard";
import { UserGroupContext } from "../../../Providers/UserGroup";
import Profiling from "../../user-profile/Profiling";

const UserSetup = props => {
  const classes = useStyles();
  const userGroupState = useContext(UserGroupContext);
  const surveyState = useContext(SurveyContext);

  const [selectedGroup, setSelectedGroup] = useState(1);

  const handleClick = id => {
    setSelectedGroup(id);
  };

  const handleNext = () => {
    const group = userGroupState.state.groups.filter(
      grp => grp.id == selectedGroup
    )[0];
    surveyState.actions.setGroup(group);

    const { history } = props;
    history.push("/newsurvey/question");
  };

  const CardCondition = group => {
    if (group.id == selectedGroup) {
      return <GroupCard group={group} isSelected={true} />;
    } else {
      return <GroupCard group={group} />;
    }
  };
  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        spacing={4}
        style={{ paddingBottom: 20 }}
      >
        <Grid item xs={12}>
          <Typography variant="h3"> User Group </Typography>
          <Typography variant="subtitle2">
            Choose one of existing user groups here. To setup groups go to
            User Group tab.
          </Typography>
        </Grid>
      </Grid>
      <div style={{ marginBottom: 30 }}>
        <Grid container spacing={3}>
          {userGroupState.state.groups.map(group => (
            <Grid item key={group.id} lg={4} md={6} xs={12}>
              <div onClick={() => handleClick(group.id)}>
                {CardCondition(group)}
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      <Divider />
      <Grid
        container
        justify="center"
        spacing={4}
        style={{ paddingBottom: 20, paddingTop: 20 }}
      >
        <Grid item xs={12}>
          <Typography variant="h3"> User Profiles </Typography>
          <Typography variant="subtitle2">
            Choose user profiling by ticking the checkbox. To setup user
            profiling, go to User Profile tab.
          </Typography>
        </Grid>
      </Grid>

      <Profiling profilingInfo={surveyState.state.profiling} />

      <Grid container spacing={3} justify="space-around">
        <Grid
          style={{ marginLeft: "80%", marginBottom: "5%", marginTop: "5%" }}
          item
          xs={3}
        >
          <Button
            size="large"
            color="primary"
            variant="outlined"
            onClick={handleNext}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserSetup;

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  }
}));


