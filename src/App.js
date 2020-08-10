import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Layout from "./hocs/Layout";
import HomePage from "./pages/Home";
import TrangDiem from "./pages/CategoriesDetail/TrangDiem";
import "./App.css";
import "./scss/font.scss";

class App extends Component {
  state = {
    name: null,
  };
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Layout>
            <Switch>
              <Route
                path="/"
                component={HomePage}
                // handler={"AHAHAHAHAHA"}
                exact
              />
              <Route path="/trang-diem" component={TrangDiem} />
            </Switch>
          </Layout>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
