import React, { Component, useContext } from "react";
import fire from "../../../firebase/firebase-config";
import {
  MenuItem,
  Select,
  Grid,
  TextField,
  Button,
  Typography,
  Divider
} from "@material-ui/core";
import { SurveyContext } from "../../../Providers/Survey";
import ParaQuestion from "./ParaQuestion";

class QuestionGrid extends Component {
  static contextType = SurveyContext;

  constructor(props) {
    super(props);
    this.state = {
      questions: initQuestions,
      nestedQuestions: []
    };
    this.questionPlaceholder = "Question";
    this.handleNewCat = this.handleNewCat.bind(this);
    this.clikedDelete = this.clikedDelete.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleCatChange = this.handleCatChange.bind(this);
    this.handleQuesChange = this.handleQuesChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.updateSurveyContext = this.updateSurveyContext.bind(this);

    this.surveyRef = fire.database().ref("surveyList");
  }

  handleNewCat() {
    this.setState(state => {
      const index = state.questions[state.questions.length - 1].index + 1;
      const questions = state.questions.concat({
        index: index,
        type: "MCQ",
        category: "",
        weight: 1,
        question: "",
        subQuestions: [
          {
            index: 1,
            weight: 1,
            question: ""
          }
        ]
      });
      return { questions: questions };
    });
    this.updateSurveyContext();
  }

  clikedDelete(deleteIndex) {
    const quesList = this.state.questions.slice(0);
    const index = quesList.indexOf(
      quesList.filter(q => q.index === deleteIndex)[0]
    );
    quesList.splice(index, 1);
    this.setState({ questions: quesList });
    this.updateSurveyContext();
  }

  handleTypeChange(e) {
    const quesList = this.state.questions.slice(0);
    const index = quesList.indexOf(
      quesList.filter(q => q.index == Number(e.target.name))[0]
    );
    quesList[index].type = types.filter(
      t => t.index == Number(e.target.value)
    )[0].val;
    this.setState({ questions: quesList });

    const questionId = Number(e.target.name);
    const typeId = e.target.value;

    let q = this.state.nestedQuestions;
    if (typeId == "3") {
      if (!q.includes(questionId)) {
        q.push(questionId);
        this.setState({
          nestedQuestions: q
        });
      }
    } else {
      if (q.includes(questionId)) {
        const index = q.indexOf(questionId);
        q.splice(index, 1);
      }
    }
  }

  handleCatChange(e) {
    const quesList = this.state.questions.slice(0);
    const index = quesList.indexOf(
      quesList.filter(q => q.index == Number(e.target.name))[0]
    );
    quesList[index].category = categories.filter(
      t => t.index == Number(e.target.value)
    )[0].val;
    this.setState({ questions: quesList });
    this.updateSurveyContext();
  }
  handleQuesChange(e) {
    const quesList = this.state.questions.slice(0);
    const index = quesList.indexOf(
      quesList.filter(q => q.index == Number(e.target.id))[0]
    );
    quesList[index].question = e.target.value;
    this.setState({ questions: quesList });
    this.updateSurveyContext();
  }
  handleWeightChange(e) {
    const quesList = this.state.questions.slice(0);
    const index = quesList.indexOf(
      quesList.filter(q => q.index == Number(e.target.id))[0]
    );
    quesList[index].weight = Number(e.target.value);
    this.setState({ questions: quesList });
    this.updateSurveyContext();
  }
  handleNext() {
    const { history } = this.props;
    history.push("/newsurvey/shedule");
  }

  updateSurveyContext() {
    this.context.state.questions = this.state.questions;
  }

  returnParaQuetion(id) {
    if (this.state.nestedQuestions.includes(Number(id))) {
      this.questionPlaceholder = "Paragraph";
      return <ParaQuestion questions={this.state.questions} id={id} />;
    }
  }

  render() {
    return (
      <div>
        <Grid style={{ margin: 20 }} container justify="center" spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3"> Categories </Typography>
            <Typography variant="subtitle2">Here is the categories.</Typography>
          </Grid>
        </Grid>
        <div style={styles.questionLine}>
          <form>
            <Grid
              style={{ textAlign: "center" }}
              container
              spacing={3}
              justify="space-around"
            >
              <Grid item xs={1}>
                <Typography>Type</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>Category</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>Question</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>Weight</Typography>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            {this.state.questions.map(ques => (
              <div key={ques.index}>
                <Grid container spacing={3} justify="space-around">
                  <Grid item xs={1}>
                    <Select
                      style={{ width: 70, marginTop: 10 }}
                      defaultValue={1}
                      onChange={this.handleTypeChange}
                      name={"" + ques.index}
                    >
                      {types.map(dropItem => (
                        <MenuItem key={dropItem.index} value={dropItem.index}>
                          {dropItem.val}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={2}>
                    <Select
                      style={{ width: 120, marginTop: 10 }}
                      onChange={this.handleCatChange}
                      name={"" + ques.index}
                    >
                      {categories.map(dropItem => (
                        <MenuItem key={dropItem.index} value={dropItem.index}>
                          {dropItem.val}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={7}>
                    <TextField
                      fullWidth
                      required
                      id={"" + ques.index}
                      label="Question"
                      margin="dense"
                      name="Question"
                      variant="outlined"
                      onChange={this.handleQuesChange}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <TextField
                      fullWidth
                      required
                      id={"" + ques.index}
                      label=""
                      margin="dense"
                      name="Weight"
                      variant="outlined"
                      defaultValue={1}
                      onChange={this.handleWeightChange}
                    />
                  </Grid>
                  <Grid style={{ marginTop: 14 }} item xs={1}>
                    <Button
                      color="secondary"
                      variant="outlined"
                      size="small"
                      onClick={() => this.clikedDelete(ques.index)}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>

                {this.returnParaQuetion(ques.index)}

                <div style={{ marginBottom: 20, marginTop: 5 }}>
                  <Divider />
                </div>
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
                style={{ marginLeft: "80%", marginBottom: "30%" }}
                item
                xs={3}
              >
                <Button
                  size="large"
                  color="primary"
                  variant="outlined"
                  onClick={this.handleNext}
                  type = "submit"
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
}

const initQuestions = [
  {
    index: 1,
    type: "MCQ",
    category: "",
    weight: 1,
    question: "",
    subQuestions: [
      {
        index: 1,
        weight: 1,
        question: ""
      }
    ]
  },
  {
    index: 2,
    type: "MCQ",
    category: "",
    weight: 1,
    question: "",
    subQuestions: [
      {
        index: 1,
        weight: 1,
        question: ""
      }
    ]
  },
  {
    index: 3,
    type: "MCQ",
    category: "",
    weight: 1,
    question: "",
    subQuestions: [
      {
        index: 1,
        weight: 1,
        question: ""
      }
    ]
  }
];

const styles = {
  select: {
    width: 80
  },
  questionLine: {
    margin: 50
  }
};
const types = [
  { index: 1, val: "MCQ" },
  { index: 2, val: "Text" },
  { index: 3, val: "Paragraph" }
];
const categories = [
  { index: 1, val: "Sallary" },
  { index: 2, val: "Infastructure" },
  { index: 3, val: "Management" },
  { index: 4, val: "Promotions" },
  { index: 5, val: "Welfare" }
];

const profilingInfo = [
  { id: 1, name: "Age Group", items: ["20 - 30", "30-40", "40-50", "50-60"] },
  {
    id: 2,
    name: "Years of Service",
    items: ["below 1 year", "1 - 2 years", "2 - 5 years", "more than 5 years"]
  },
  {
    id: 3,
    name: "Designation",
    items: ["manager", "engineer", "cheif engineer", "employee"]
  },
  {
    id: 4,
    name: "Transportation",
    items: ["by bus", "by train", "by own vehicle", "on foot"]
  }
];
const users = [
  {
    designation: "manager",
    email: "bumuthu@gmail.com",
    empId: "T4564",
    id: 1,
    phone: "43465464",
    division: "management"
  },
  {
    designation: "manager",
    email: "dimuthu@gmail.com",
    empId: "T4564",
    id: 1,
    phone: "43465464",
    division: "bussiness"
  }
];

const divisions = [
  { val: "Management", index: 0 },
  { val: "Marketing", index: 0 },
  { val: "Bussiness", index: 0 },
  { val: "HR", index: 0 },
  { val: "Finance", index: 0 }
];
export default QuestionGrid;
