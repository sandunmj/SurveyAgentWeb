import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import GroupCard from "./GroupCard";
import Search from "./UserSearch";
import { UserGroupContext } from "../../Providers/UserGroup";
import { SurveyContext } from "../../Providers/Survey";
import { GroupTitle } from "./UserSearch";
import DivisionsGrid from "./DivisionsGrid";
import UsersTable from "./UsersTable";

const UserGroup = () => {
  const classes = useStyles();
  const state = useContext(UserGroupContext);
  const stateSurvey = useContext(SurveyContext);

  const handleClick = id => {
    const group = state.state.groups.filter(grp => grp.id == id)[0];
    const emails = createEmailList(group.emailList);
    state.actions.setSearchEmails(emails);
    state.actions.setSelectedGroup(group);
  };

  const createEmailList = emailList => {
    let emails = [];
    emailList.map(email => {
      emails.push({ email: email });
    });
    return emails;
  };

  const handleNewGroup = () => {
    state.actions.setSearchEmails([]);
    state.actions.setSelectedGroup({
      id: 0,
      emailList: [],
      title: "Create A New Group",
      description: "Create a brandnew group with existing users"
    });
  };

  const callbackFromDivisions = () => {
    stateSurvey.actions.setDivisions(state.state.divisions)
  };
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3"> User Groups </Typography>
          <Typography variant="subtitle2">
            Existing user groups are here.
          </Typography>
        </Grid>
      </Grid>
      <div style={{ marginBottom: 30 }} className={classes.content}>
        <Grid container spacing={3}>
          {state.state.groups.map(group => (
            <Grid item key={group.id} lg={4} md={6} xs={12}>
              <div onClick={() => handleClick(group.id)}>
                <GroupCard group={group} />
              </div>
            </Grid>
          ))}
          <Grid item lg={4} md={6} xs={12}>
            <div onClick={() => handleNewGroup()}>
              <GroupCard
                group={{
                  title: "Create A New Group",
                  description: "Create new users group",
                  imageUrl: "/assets/company/add.jpg",
                  emailList: []
                }}
              />
            </div>
          </Grid>
        </Grid>
      </div>

      <div>
        <GroupTitle />
        <Grid container spacing={5} justify="space-around">
          <Grid item xs={6}>
            <Search />
          </Grid>
        </Grid>
      </div>

      <div className={classes.content}>
        <UsersTable userGroups={state.state.groups} />
      </div>

      <div className={classes.content} style = {{marginBottom:"30%"}}>
        <DivisionsGrid parentCallback={callbackFromDivisions} />
      </div>
    </div>
  );
};

export default UserGroup;

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  }
}));
