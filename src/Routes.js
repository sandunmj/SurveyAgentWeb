import React from "react";
import { Switch, Redirect } from "react-router-dom";
import RouteLayout from "./components/RouteLayout";
import MainLayout from "./layouts/Main/MainLayout";
import Home from "./views/Home";
import UserGroup from "./views/user-group/UserGroup";
import DashBoard from "./views/dashboard-component/DashBoard";
import NewSurvey from "./views/new-survey/NewSurvey";
import Question from "./views/new-survey/survey-questions/QuestionGrid";
import UserSetup from "./views/new-survey/setup-users/UserSetup"
import Settings from "./views/Settings";
import Surveys from "./views/Surveys";
import UserProfile from "./views/user-profile/UserProfile";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteLayout component={Home} exact layout={MainLayout} path="/home" />
      <RouteLayout
        component={UserGroup}
        exact
        layout={MainLayout}
        path="/usergroup"
      />
      <RouteLayout
        component={UserProfile}
        exact
        layout={MainLayout}
        path="/userprofile"
      />
      <RouteLayout
        component={Surveys}
        exact
        layout={MainLayout}
        path="/surveys"
      />
      <RouteLayout
        component={NewSurvey}
        exact
        layout={MainLayout}
        path="/newsurvey"
      />
      <RouteLayout
        component={Question}
        exact
        layout={MainLayout}
        path="/newsurvey/question"
      />
      <RouteLayout
        component={UserSetup}
        exact
        layout={MainLayout}
        path="/newsurvey/users"
      />
      <RouteLayout
        component={Settings}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteLayout
        component={DashBoard}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
    </Switch>
  );
};
export default Routes;
