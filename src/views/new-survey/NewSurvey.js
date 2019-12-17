import React, { Component } from "react";
import SurveyTitle from "./title-cat/SurveyTitle";
import QuestionGrid from "./survey-questions/QuestionGrid";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

export const SurveyContext = React.createContext("init");
export const SurveyProvider = SurveyContext.Provider;
export const SurveyConsumer = SurveyContext.Consumer;

export default class NewSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
    this.callbackFunction = this.callbackFunction.bind(this);
    console.log(this.props.children);
  }
  callbackFunction = childData => {
    this.setState({ categories: childData });
    this.categories = childData;

    // this.sendContext(childData);

    const { history } = this.props;
    history.push("/newsurvey/question");
  };

  sendContext(childData) {
    console.log("hhhhhhhhhhhhhh");
    return (
      <div>
        <SurveyProvider value={"oooooooo"}>
          <QuestionGrid />
        </SurveyProvider>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/newsurvey/question">
              <SurveyProvider value="oooo">
                <QuestionGrid />
              </SurveyProvider>
            </Route>
            <Route exact path="/newsurvey">
              <SurveyTitle parentCallback={this.callbackFunction} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
