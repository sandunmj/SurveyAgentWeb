import React, { Component } from "react";
import SurveyTitle from "./title-cat/SurveyTitle";
import QuestionGrid from "./survey-questions/QuestionGrid";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import UserSetup from "./setup-users/UserSetup";

export default class NewSurvey extends Component {
  constructor(props) {
    super(props);
    this.callbackFromTitle = this.callbackFromTitle.bind(this);
  }
  callbackFromTitle = () => {
    const { history } = this.props;
    history.push("/newsurvey/users");
  };

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/newsurvey/question">
              <QuestionGrid />
            </Route>
            <Route exact path="/newsurvey/users">
              <UserSetup />
            </Route>
            <Route exact path="/newsurvey">
              <SurveyTitle parentCallback={this.callbackFromTitle} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
