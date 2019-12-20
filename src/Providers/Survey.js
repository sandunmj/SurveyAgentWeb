import React, { Component } from "react";
import fire from "../firebase/firebase-config";

export const SurveyContext = React.createContext();

export class SurveyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyInfo: null
    };
  }
  render() {
    return (
      <div>
        <SurveyContext.Provider
          value={{
            state: this.state,
            actions: {
              setSurveyInfo: info =>
                this.setState({
                  surveyInfo: info
                })
            }
          }}
        >
          {this.props.children}
        </SurveyContext.Provider>
      </div>
    );
  }
}
