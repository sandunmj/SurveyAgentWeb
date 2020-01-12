import React, { Component } from "react";
import fire from "../firebase/firebase-config";

export const SurveyContext = React.createContext();

export const CategoriesRef = fire.database().ref("categories");
export const ProfileRef = fire.database().ref("profiling");
export const DivisionsRef = fire.database().ref("divisions");

export class SurveyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyInfo: null,
      categories: [],
      group: null,
      profiling: [],
      validProfs: [],
      divisions: [],
      questions: []
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.fetchProfiles = this.fetchProfiles.bind(this);
    this.fetchDivisions = this.fetchDivisions.bind(this);

    this.fetchCategories();
    this.fetchProfiles();
    this.fetchDivisions();
  }

  fetchCategories() {
    CategoriesRef.once("value").then(snapshot => {
      this.setState({
        categories: snapshot.val()
      });
    });
  }

  fetchProfiles() {
    ProfileRef.once("value").then(snapshot => {
      this.setState({
        profiling: snapshot.val()
      });
    });
  }

  fetchDivisions() {
    DivisionsRef.once("value").then(snapshot => {
      this.setState({
        divisions: snapshot.val()
      });
    });
  }

  saveProfiles(profs) {
    ProfileRef.set(profs);
  }
  saveCategories(categories) {
    CategoriesRef.set(categories);
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
                }),
              setCategories: categories =>
                this.setState({
                  categories: categories
                }),
              setGroup: group =>
                this.setState({
                  group: group
                }),
              setProfiling: prof =>
                this.setState({
                  profiling: prof
                }),
              setValidProfs: prof =>
                this.setState({
                  validProfs: prof
                }),
              setDivisions: divisions =>
                this.setState({
                  divisions: divisions
                }),
              setQuestions: questions =>
                this.setState({
                  questions: questions
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
