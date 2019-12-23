import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { UserGroupContext } from "../../Providers/UserGroup";
import { DivisionsRef } from "../../Providers/UserGroup";

export default class DivisionsGrid extends Component {
  static contextType = UserGroupContext;

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleNewDiv = this.handleNewDiv.bind(this);
    this.handleNewDiv = this.handleNewDiv.bind(this);
    this.clikedDelete = this.clikedDelete.bind(this);
    this.handleSetupDivisions = this.handleSetupDivisions.bind(this);
  }

  handleChange(e) {
    let divs = this.context.state.divisions.slice(0);
    const index = divs.indexOf(divs.filter(cat => cat.id == e.target.id)[0]);
    divs[index] = { id: Number(e.target.id), division: e.target.value };
    this.context.actions.setDivisions(divs);
  }

  handleNewDiv() {
    let divs = this.context.state.divisions.slice(0);
    let index = 1;
    if (divs.length) {
      index = divs[divs.length - 1].id + 1;
    }
    divs = divs.concat({
      id: index,
      division: ""
    });
    this.context.actions.setDivisions(divs);
  }

  clikedDelete(deleteIndex) {
    let divs = this.context.state.divisions.slice(0);
    const index = divs.indexOf(divs.filter(div => div.id === deleteIndex)[0]);
    divs.splice(index, 1);
    this.context.actions.setDivisions(divs);
  }

  handleSetupDivisions() {
    DivisionsRef.set(this.context.state.divisions);
    this.props.parentCallback();
  }

  render() {
    return (
      <div>
        <div style={{ marginTop: 20 }}>
          <Grid container justify="center" spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3"> Setup Divisions </Typography>
              <Typography variant="subtitle2">
                You can setup divisions and use them in Add New User section.
              </Typography>
            </Grid>
          </Grid>
          <form>
            {this.context.state.divisions.map(div => (
              <div key={div.id} style={styles.category}>
                <Grid container spacing={3} justify="space-around">
                  <Grid item xs={9}>
                    <TextField
                      fullWidth
                      id={"" + div.id}
                      label="Division"
                      margin="dense"
                      name="Division"
                      variant="outlined"
                      defaultValue={div.division}
                      onChange={this.handleChange}
                      required
                    />
                  </Grid>
                  <Grid style={{ marginTop: 14 }} item xs={3}>
                    <Button
                      color="secondary"
                      variant="outlined"
                      size="small"
                      onClick={() => this.clikedDelete(div.id)}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </div>
            ))}
            <Grid container spacing={3} justify="space-around">
              <Grid style={{ marginLeft: "12%" }} item xs={3}>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={this.handleNewDiv}
                >
                  New
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={3} justify="space-around">
              <Grid style={{ marginLeft: "3%" }} item xs={3}>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={this.handleSetupDivisions}
                  type="submit"
                >
                  Sutup Divisions
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
}

const styles = {
  title: {
    margin: 20,
    marginLeft: "20%",
    marginRight: "20%",
    textAlign: "center"
  },
  description: {
    margin: 20
  },
  category: {
    margin: 5,
    marginLeft: "30%",
    marginRight: "30%",
    textAlign: "center"
  }
};
