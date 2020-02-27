import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./pages/PrivateRoute";
import {connect} from "react-redux";

function App(props) {
  console.log(props.user.isLogin);
  return (
    <div className="App">
      <Router
        getUserConfirmation={(message, callback) => {
          // this is the default behavior
          const allowTransition = window.confirm(message);
          callback(allowTransition);
        }}>
        <div><Link to="/">首页</Link></div>
        <div><Link to="/user">用户中心</Link></div>
        <div><Link to="/login">登录</Link></div>
        <div><Link to="/children">children</Link></div>
        <div><Link to="/render">render</Link></div>
        <div>登陆状态: {props.user.isLogin ? 'true' : 'false'}</div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          {/*<Route path="/user" component={UserPage} />*/}
          <PrivateRoute path="/user" component={UserPage}/>
          <Route path="/login" component={LoginPage}/>
          
          <Route path="/children" children={() => <div>children</div>}/>
          <Route path="/render" render={() => <div>render</div>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default connect(
  // mapStateToProps
  s => s
  // mapDispatchToProps
)(App);
