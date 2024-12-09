import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import { settings } from "../portfolio.js";

export default class Main extends Component {
  render() {
    const basePath = "/amira-khalfi-website";
    return (
      <BrowserRouter basename={basePath}>
        <Switch>
          <Route
            path={`${basePath}/`}
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path={`${basePath}/home`}
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path={`${basePath}/experience`}
            exact
            render={(props) => (
              <Experience {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path={`${basePath}/education`}
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path={`${basePath}/opensource`}
            render={(props) => (
              <Opensource {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path={`${basePath}/contact`}
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />

          {settings.isSplash && (
            <Route
              path={`${basePath}/splash`}
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}
        </Switch>
      </BrowserRouter>
    );
  }
}
