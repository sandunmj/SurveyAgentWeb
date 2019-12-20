import React from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { SurveyContext } from "../../../Providers/Survey";

class SurveyTitle extends React.Component {
  static contextType = SurveyContext;

  constructor(props) {
    super(props);
    this.state = {
      categories: categories,
      title: "",
      desc: ""
    };
    this.handleNewCat = this.handleNewCat.bind(this);
    this.clikedDelete = this.clikedDelete.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
  }
  handleChange(e) {
    const catList = this.state.categories.slice(0);
    const index = catList.indexOf(
      catList.filter(cat => cat.index == e.target.id)[0]
    );
    catList[index] = { index: Number(e.target.id), val: e.target.value };
    this.setState({
      categories: catList
    });
  }

  handleNewCat() {
    this.setState(state => {
      const index = state.categories[state.categories.length - 1].index + 1;
      const categories = state.categories.concat({
        index: index,
        val: ""
      });
      return { categories: categories };
    });
  }

  clikedDelete(deleteIndex) {
    const catList = this.state.categories.slice(0);
    const index = catList.indexOf(
      catList.filter(cat => cat.index === deleteIndex)[0]
    );
    catList.splice(index, 1);
    this.setState({ categories: catList });
  }
  handleTitleChange(e) {
    this.state.title = e.target.value;
  }
  handleDescChange(e) {
    this.state.desc = e.target.value;
  }
  handleSubmit(event) {
    console.log(event);
  }
  handleNext() {
    const surveyInfo = {
      title: this.state.title,
      description: this.state.desc,
      categories: this.state.categories
    };
    this.context.actions.setSurveyInfo(surveyInfo);
    this.props.parentCallback(this.state.categories);
  }
  render() {
    return (
      <div>
        <Grid style = {{margin: 20}} container justify="center" spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3"> New Survey </Typography>
            <Typography variant="subtitle2">
              You can publish a new survey.
            </Typography>
          </Grid>
        </Grid>
        <form onSubmit={this.handleSubmit}>
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
        </form>
        <div>
          {this.state.categories.map(cat => (
            <div key={cat.index} style={styles.category}>
              <Grid container spacing={3} justify="space-around">
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
                <Grid style={{ marginTop: 14 }} item xs={3}>
                  <Button
                    color="secondary"
                    variant="outlined"
                    size="small"
                    onClick={() => this.clikedDelete(cat.index)}
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
    margin: 20,
    marginLeft: "30%",
    marginRight: "30%",
    textAlign: "center"
  }
};

const categories = [
  { index: 1, val: "Sallary" },
  { index: 2, val: "Infastructure" },
  { index: 3, val: "Management" },
  { index: 4, val: "Promotions" },
  { index: 5, val: "Welfare" }
];
