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

class Profiling extends React.Component {
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
    console.log(this.state.checkedItems);
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
          <Grid container spacing={3} justify="space-around">
            
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
            <label key={prof.key}>
              <Typography style={this.getTextStyle(this.state.checkedItems.get(prof.name))} gutterBottom variant="h4">
                {prof.name}
              </Typography>
              </label>
            </Grid>
            <Grid item xs={3}>
              <Select style={styles.select}>
                {prof.items.map(dropItem => (
                  <MenuItem>{dropItem}</MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={3}>
              <label key={prof.key}>
                <Checkbox
                  name={prof.name}
                  checked={this.state.checkedItems.get(prof.name)}
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
        color: 'rgb(200,200,200)'
    }
  };
  
export default Profiling;
