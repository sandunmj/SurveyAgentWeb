import React, { Component } from "react";
import SurveyCard from "./SurveysCard";
import { Typography, Grid, Divider } from "@material-ui/core";
import { SurveyContext } from "../../Providers/Survey";
import fire from "../../firebase/firebase-config";

export default class Surveys extends Component {
  static contextType = SurveyContext;

  constructor(props) {
    super(props);
    this.getSurveyInfo = this.getSurveyInfo.bind(this);
    this.fetchSurveys = this.fetchSurveys.bind(this);

    this.state = { surveys: [] };

    this.surveysRef = fire.database().ref("surveyList");
    this.fetchSurveys();
  }

  fetchSurveys() {
    this.surveysRef.once("value").then(snapshot => {
      this.getSurveyInfo(snapshot.val());
    });
  }
  getSurveyInfo(surveys) {
    let surveyList = [];
    for (var key in surveys) {
      const survey = surveys[key.toString()];
      const obj = {
        description: survey.description,
        title: survey.title,
        users: survey.users.emailList.length
      };
      surveyList.push(obj);
    }
    this.setState({ surveys: surveyList });
  }

  handleClick(i) {
    console.log(i);
  }

  render() {
    return (
      <div style={{ margin: "3%" }}>
        <Grid container justify="center" spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3"> To be published</Typography>
            <Typography variant="subtitle2">
              These surveys will be published in near future.
            </Typography>
          </Grid>
        </Grid>
        <div style={{ marginBottom: "50%" , marginTop : 20}}>
          <Grid container spacing={3}>
            {this.state.surveys.map((survey, i) => (
              <Grid item key={i} lg={4} md={6} xs={12}>
                <div onClick={() => this.handleClick(i)}>
                  <SurveyCard surveyInfo={survey} />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <Divider />
      </div>
    );
  }
}
