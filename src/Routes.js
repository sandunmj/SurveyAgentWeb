import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteLayout from './components/RouteLayout';
import MainLayout from './layouts/Main/MainLayout';
import Home from './views/Home';
import UserGroup from './views/UserGroup';
import DashBoard from './views/DashBoard';
import NewSurvey from './views/NewSurvey';
import Settings from './views/Settings';
import UserProfile from './views/UserProfile';
import Surveys from './views/Surveys';

const Routes = () => {
    return (
        <Switch>
            <Redirect
                exact
                from="/"
                to="/home" />
            <RouteLayout
                component={Home}
                exact
                layout={MainLayout}
                path="/home" />
            <RouteLayout
                component={UserGroup}
                exact
                layout={MainLayout}
                path="/usergroup" />
            <RouteLayout
                component={UserProfile}
                exact
                layout={MainLayout}
                path="/userprofile" />
            <RouteLayout
                component={Surveys}
                exact
                layout={MainLayout}
                path="/surveys" />
            <RouteLayout
                component={NewSurvey}
                exact
                layout={MainLayout}
                path="/newsurvey" />
            <RouteLayout
                component={Settings}
                exact
                layout={MainLayout}
                path="/settings" />
            <RouteLayout
                component={DashBoard}
                exact
                layout={MainLayout}
                path="/dashboard" />
        </Switch>
    );
}
export default Routes;