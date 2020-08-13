import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Layout from "./hocs/Layout";
import HomePage from "./pages/Home";
import TrangDiem from "./pages/CategoriesDetail/TrangDiem";
import Login from "./pages/Login";
import "./App.css";
import "./sass/config/_font.scss";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Layout>
                        <Switch>
                            <Route
                                path="/"
                                component={HomePage}
                                exact
                            />
                            <Route path="/trang-diem" component={TrangDiem} />
                            <Route path="/login" component={Login} />
                        </Switch>
                    </Layout>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
