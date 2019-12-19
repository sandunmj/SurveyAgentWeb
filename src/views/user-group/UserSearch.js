import React, { Component } from "react";
import { TextField } from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";

export default class UserSearch extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange(this);
  }
  render() {
    let items = [
      { title: "The Shawshank Redemption", year: 1994 },
      { title: "The Godfather", year: 1972 },
      { title: "The Godfather: Part II", year: 1974 },
      { title: "The Dark Knight", year: 2008 },
      { title: "12 Angry Men", year: 1957 },
      { title: "Schindler's List", year: 1993 },
      { title: "Pulp Fiction", year: 1994 }
    ];
    return (
      <div class={styles.root}>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={items}
          getOptionLabel={option => option.title}
          defaultValue={[]}
          filterSelectedOptions
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              label="filterSelectedOptions"
              placeholder="Favorites"
              fullWidth
            />
          )}
        />
      </div>
    );
  }
}

const styles = {
  root: {
    width: 500,
    "& > * + *": {
      marginTop: 20
    }
  }
};
