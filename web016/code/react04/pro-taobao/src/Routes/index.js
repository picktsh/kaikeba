import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MyTaobaoPage from "../pages/MyTaobaoPage";
import LoginPage from "../pages/LoginPage";
import _404Page from "../pages/_404Page";
import PrivateRoute from "./PrivateRoute";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                {/* <Route path="/mytaobao" component={MyTaobaoPage} /> */}
                <PrivateRoute path="/mytaobao" component={MyTaobaoPage} />
                <Route path="/login" component={LoginPage} />
                <Route component={_404Page} />
            </Switch>
        </Router>
    );
}

export default Routes;
