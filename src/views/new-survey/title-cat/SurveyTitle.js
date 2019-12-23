import React from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { SurveyContext } from "../../../Providers/Survey";
import { CategoriesRef } from "../../../Providers/Survey";

class SurveyTitle extends React.Component {
  static contextType = SurveyContext;

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.handleNewCat = this.handleNewCat.bind(this);
    this.clikedDelete = this.clikedDelete.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleChangeDescription =this.handleChangeDescription.bind(this);
  }
  handleChange(e) {
    const catList = this.context.state.categories.slice(0);
    const index = catList.indexOf(
      catList.filter(cat => cat.id == Number(e.target.id))[0]
    );
    catList[index] = { id: Number(e.target.id), category: e.target.value, description:catList[index].description };
    this.context.actions.setCategories(catList);
  }
  handleChangeDescription(e) {
    const catList = this.context.state.categories.slice(0);
    const index = catList.indexOf(
      catList.filter(cat => cat.id == Number(e.target.id))[0]
    );
    catList[index] = { id: Number(e.target.id), category:catList[index].category, description: e.target.value };
    this.context.actions.setCategories(
      catList
    );
  }

  handleNewCat() {
    const state = this.context.state.categories.slice(0);
    const index = state.categories[state.categories.length - 1].index + 1;
    const categories = state.categories.concat({
      id: index,
      category: "",
      description: ""
    });
    this.context.actions.setCategories(categories);
  }

  clikedDelete(deleteIndex) {
    const catList = this.context.state.categories.slice(0);
    const index = catList.indexOf(
      catList.filter(cat => cat.index == deleteIndex)[0]
    );
    catList.splice(index, 1);
    this.context.actions.setCategories( catList );
  }
  handleTitleChange(e) {
    this.state.title = e.target.value;
  }
  handleDescChange(e) {
    this.state.description = e.target.value;
  }
  handleNext() {
    const surveyInfo = {
      title: this.state.title,
      description: this.state.description
    };
    this.context.actions.setSurveyInfo(surveyInfo);

    this.props.parentCallback();

    CategoriesRef.set(this.context.state.categories);
  }
  render() {
    return (
      <div>
        <form>
          <Grid style={{ margin: 20 }} container justify="center" spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3"> New Survey </Typography>
              <Typography variant="subtitle2">
                You can publish a new survey.
              </Typography>
            </Grid>
          </Grid>
          <div style={styles.title}>
            <TextField
              id={"title"}
              fullWidth
              label="Title"
              margin="dense"
              name="Title"
              required
              variant="outlined"
              onChange={this.handleTitleChange}
            />
          </div>
          <div style={styles.description}>
            <TextField
              id={"desc"}
              fullWidth
              label="Description"
              margin="dense"
              name="Description"
              variant="outlined"
              onChange={this.handleDescChange}
            />
          </div>
          <div>
            {this.context.state.categories.map(cat => (
              <div key={cat.id} style={styles.category}>
                <Grid container spacing={3} justify="space-around">
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      id={"" + cat.id}
                      label="Category"
                      margin="dense"
                      name="Category"
                      variant="outlined"
                      defaultValue={cat.category}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      fullWidth
                      id={"" + cat.id}
                      label="Description"
                      margin="dense"
                      name="Description"
                      variant="outlined"
                      defaultValue={cat.description}
                      onChange={this.handleChangeDescription}
                    />
                  </Grid>
                  <Grid style={{ marginTop: 14 }} item xs={3}>
                    <Button
                      color="secondary"
                      variant="outlined"
                      size="small"
                      onClick={() => this.clikedDelete(cat.id)}
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
                  onClick={this.handleNewCat}
                >
                  New
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={3} justify="space-around">
              <Grid
                style={{ marginLeft: "80%", marginBottom: "10%" }}
                item
                xs={3}
              >
                <Button
                  size="large"
                  color="primary"
                  variant="outlined"
                  onClick={this.handleNext}
                  type="submit"
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    );
  }
}

export default SurveyTitle;

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
    marginLeft: "15%",
    marginRight: "10%",
    textAlign: "center"
  }
};

const categories = [
  { id: 1, category: "Sallary", description: "This is ablout sallary" },
  {
    id: 2,
    category: "Infastructure",
    description: "This is ablout Infastructure"
  },
  { id: 3, category: "Management", description: "This is ablout Management" },
  { id: 4, category: "Promotions", description: "This is ablout Promotions" },
  { id: 5, category: "Welfare", description: "This is ablout Welfare" }
];
