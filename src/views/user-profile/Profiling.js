import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Typography,
  Select,
  MenuItem,
  Grid,
  Checkbox,
  rgbToHex
} from "@material-ui/core";
import { SurveyContext } from "../../Providers/Survey";

class Profiling extends React.Component {
  static contextType = SurveyContext;

  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));

    let checkedList = [];

    for (const [key, value] of this.state.checkedItems.entries()) {
      if (value) {
        checkedList.push(key);
      }
    }
    if (isChecked) {
      checkedList.push(item);
    } else {
      const index = checkedList.indexOf(item);
      checkedList.splice(index, 1);
    }
    let validProfList = [];
    checkedList.forEach(name => {
      validProfList.push(
        this.props.profilingInfo.filter(prof => prof.name == name)[0]
      );
    });
    this.context.actions.setValidProfs(validProfList);
  }

  getTextStyle(checked) {
    if (checked) {
      return styles.nameEnabled;
    } else {
      return styles.nameDisabled;
    }
  }

  render() {
    return (
      <div>
        {this.props.profilingInfo.map(prof => (
          <Grid container spacing={3} justify="space-around" key={prof.id}>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <label>
                <Typography
                  style={this.getTextStyle(
                    this.state.checkedItems.get(prof.name)
                  )}
                  gutterBottom
                  variant="h4"
                >
                  {prof.name}
                </Typography>
              </label>
            </Grid>
            <Grid item xs={3}>
              <Select style={styles.select}>
                {prof.items.map((dropItem, id) => (
                  <MenuItem key={id}>{dropItem}</MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={3}>
              <label>
                <Checkbox
                  name={prof.name}
                  checked={this.state.checkedItems.get(prof.id)}
                  onChange={this.handleChange}
                />
              </label>
            </Grid>
          </Grid>
        ))}
      </div>
    );
  }
}

const styles = {
  select: {
    width: 100
  },
  nameEnabled: {
    paddingTop: 8
  },
  nameDisabled: {
    paddingTop: 8,
    color: "rgb(200,200,200)"
  }
};

export default Profiling;
