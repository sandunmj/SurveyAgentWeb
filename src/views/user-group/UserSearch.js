import React, { Component, useContext } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Divider
} from "@material-ui/core";
import { UserGroupContext } from "../../Providers/UserGroup";
import { Autocomplete } from "@material-ui/lab";
import { UserGroupRef } from "../../Providers/UserGroup";

export default class UserSearch extends Component {
  static contextType = UserGroupContext;

  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSave(e) {
    let emails = [];
    this.context.state.searchEmails.forEach(email => emails.push(email.email));
    let groups = this.context.state.groups;

    if (this.context.state.selectedGroup.id != 0) {
      const group = {
        title: this.context.state.selectedGroup.title,
        description: this.context.state.selectedGroup.description,
        emailList: emails,
        id: this.context.state.selectedGroup.id
      };

      const index = groups.indexOf(groups.filter(grp => grp.id == group.id)[0]);
      groups[index] = group;
    } else {
      const newId =
        this.context.state.groups[this.context.state.groups.length - 1].id + 1;

      const group = {
        title: "User Group",
        description: "This is a newly created user group",
        emailList: emails,
        id: newId
      };

      groups.push(group);
    }
    UserGroupRef.set(groups);
  }
  handleChange(e, val) {
    console.log("changes", val);
    this.context.actions.setSearchEmails(val);
  }

  render() {
    return (
      <div className={styles.root}>
        <form>
          {/* <Grid container spacing={3} justify="space-around">
            <Grid item xs={9}>
              <TextField
                fullWidth
                id={"" + cat.index}
                label="Category"
                margin="dense"
                name="Category"
                variant="outlined"
                defaultValue={cat.val}
                onChange={this.handleChange}
              />
            </Grid>

          </Grid> */}
          <Autocomplete
            multiple
            id="search"
            options={this.context.state.users}
            getOptionLabel={option => option.email}
            value={this.context.state.searchEmails}
            filterSelectedOptions
            onChange={this.handleChange}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Group"
                placeholder="Email"
                fullWidth
              />
            )}
          />
          <Grid
            style={{ marginTop: "5%" }}
            container
            spacing={3}
            justify="space-around"
          >
            <Grid item xs={3}>
              <Button
                size="large"
                color="primary"
                variant="outlined"
                onClick={this.handleSave}
                type="submit"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export const GroupTitle = () => {
  const state = useContext(UserGroupContext);
  const group = state.state.selectedGroup;
  if (group) {
    return (
      <div className={styles.root}>
        <Divider />
        <Grid
          style={{ marginTop: "2%" }}
          container
          justify="center"
          spacing={4}
        >
          <Grid item xs={12} className={styles.content}>
            <Typography variant="h3">{group.title} </Typography>
            <Typography variant="subtitle2">{group.description}</Typography>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const styles = {
  root: {
    width: 200,
    "& > * + *": {
      marginTop: 100
    },
    margin: 100
  },
  content: {
    paddingTop: 150,
    textAlign: "center",
    paddingBottom: 300
  }
};
