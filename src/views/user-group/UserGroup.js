import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import GroupCard from "./GroupCard";
import UsersTable from "./UsersTable";
import Search from "./UserSearch";
import { UserGroupContext } from "../../Providers/UserGroup";

const UserGroup = () => {
  const classes = useStyles();
  const a = [];
  const [groupState, setGroupState] = useContext(UserGroupContext);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container spacing={3}>
          {groupState.groups.map(group => (
            <Grid item key={group.id} lg={4} md={6} xs={12}>
              <div onClick={() => console.log(group.id)}>
                <GroupCard group={group} />
              </div>
            </Grid>
          ))}
          <Grid item lg={4} md={6} xs={12}>
            <div onClick={() => console.log("new")}>
              <GroupCard
                group={{
                  title: "New Group",
                  description: "Create new users group",
                  imageUrl: "/assets/company/add.jpg",
                  totalDownloads: "0"
                }}
              />
            </div>
          </Grid>
        </Grid>
      </div>

      <div>
        <Search />
      </div>

      {/* <div className={classes.content}>
        <UsersTable userGroups={groupState.userGroups} />
      </div> */}
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
