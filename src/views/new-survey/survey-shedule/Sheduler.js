import React, { Component } from "react";
import { SurveyContext } from "../../../Providers/Survey";
import DateFnsUtils from "@date-io/date-fns";
import fire from "../../../firebase/firebase-config";
import "date-fns";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Divider
} from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default class Sheduler extends Component {
  static contextType = SurveyContext;

  constructor(props) {
    super(props);
    this.surveyRef = fire.database().ref("surveyList");
    this.state = {
      startDate: new Date(),
      startTime: new Date(),
      endDate: new Date(),
      endTime: new Date()
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
    this.getStartingTime = this.getStartingTime.bind(this);
    this.getEndingTime = this.getEndingTime.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.cleanSubQuestion = this.cleanSubQuestion.bind(this);
  }

  handleNext() {
    this.cleanSubQuestion();
    const survey = {
      categories: this.context.state.categories,
      description: this.context.state.surveyInfo.description,
      title: this.context.state.surveyInfo.title,
      questions: this.context.state.questions,
      users: this.context.state.group,
      profiling: this.context.state.validProfs,
      divisions: this.context.state.divisions,
      startingTime: this.getStartingTime(),
      endingTime: this.getEndingTime()
    };

    const surveyId = this.surveyRef.push(survey).getKey();
    this.currentSurveyIDsRef = fire
      .database()
      .ref("currentSurveyIDs/" + surveyId)
      .set({ valid: true });

    const { history } = this.props;
    history.push("/surveys");
  }

  cleanSubQuestion() {
    let questionsDup = this.context.state.questions.slice(0);
    questionsDup.forEach((ques, i) => {
      if (ques.type != "Paragraph") {
        questionsDup[i].subQuestions = [];
      }
    });
    this.context.actions.setQuestions(questionsDup);
  }

  getStartingTime() {
    const len = this.state.startTime.toString().length;
    return (
      this.state.startDate.toString().slice(0, 16) +
      this.state.startTime.toString().slice(16, len)
    );
  }
  getEndingTime() {
    const len = this.state.endTime.toString().length;
    return (
      this.state.endDate.toString().slice(0, 16) +
      this.state.endTime.toString().slice(16, len)
    );
  }

  handleStartDateChange(date) {
    this.setState({ startDate: date });
  }
  handleStartTimeChange(date) {
    this.setState({ startTime: date });
  }
  handleEndDateChange(date) {
    this.setState({ endDate: date });
  }
  handleEndTimeChange(date) {
    this.setState({ endTime: date });
  }

  render() {
    return (
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form>
            <Grid
              style={{ margin: "2%" }}
              container
              justify="center"
              spacing={4}
            >
              <Grid item xs={12}>
                <Typography variant="h3"> Survey</Typography>
                <Typography variant="subtitle2">
                  Here you can shedule the survey as wanted.
                </Typography>
              </Grid>
            </Grid>

            <Typography variant="subtitle2" style={{ marginLeft: "10%" }}>
              Survey will be on live at this moment.
            </Typography>
            <Grid
              style={{ marginBottom: 10, textAlign: "center" }}
              container
              justify="center"
              spacing={4}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={this.state.startDate}
                  onChange={this.handleStartDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  value={this.state.startTime}
                  onChange={this.handleStartTimeChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>

            <Typography variant="subtitle2" style={{ marginLeft: "10%" }}>
              Survey will be closed at this moment.
            </Typography>
            <Grid
              style={{ marginTop: 5, textAlign: "center" }}
              container
              justify="center"
              spacing={4}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={this.state.endDate}
                  onChange={this.handleEndDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  value={this.state.endTime}
                  onChange={this.handleEndTimeChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>

            <Grid container spacing={3} justify="space-around">
              <Grid
                style={{
                  textAlign: "ceneter",
                  marginTop: "5%",
                  marginLeft: "12%",
                  marginBottom: "30%"
                }}
                item
                xs={3}
              >
                <Button
                  color="primary"
                  variant="outlined"
                  type="submit"
                  size="large"
                  onClick={this.handleNext}
                >
                  Publish
                </Button>
              </Grid>
            </Grid>
          </form>
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}
