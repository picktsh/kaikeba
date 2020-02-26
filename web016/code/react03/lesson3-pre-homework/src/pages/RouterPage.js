import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import {connect} from "react-redux";
// import {connect} from "../kReactRedux";
import {bindActionCreators} from "redux";

import HomePage from "./HomePage";
import UserPage from "./UserPage";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoute";

class RouterPage extends Component {
  logout() {
    this.props.logout()
  }
  
  render() {
    console.log('RouterPage', this.props);
    const {username, isLogin} = this.props
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/">首页</Link>
          <br/>
          <Link to="/user">用户中心</Link>
          <br/>
          {isLogin ? <div>已登录 <button onClick={() => {
            this.logout()
          }}>退出</button></div> : <Link to="/login">登录</Link>}
          <br/>
          搜索:
          <Link to="/search/123">123</Link> ,
          <Link to="/search/abc">abc</Link>
          <br/>
          <div>username: {username}</div>
          <div>isLogin: {isLogin ? 'true' : 'false'}</div>
          
          {/*Route一定要包裹在Router之内 因为Route要适应history location，这些来自router  */}
          {/* path值如果不写 则一直匹配 */}
          <Switch>
            <Route exact path="/" component={HomePage}/>
            {/* <Route path="/user" component={UserPage} /> */}
            <PrivateRoute path="/user" component={UserPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/search/:id" component={SearchComponent}/>
            <Route render={() => <div>404</div>}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

function DetailComponent(props) {
  console.log(props);
  return <div>{props.match.url} DetailComponent</div>;
}

function SearchComponent(props) {
  console.log("SearchComponent", props); //sy-log
  const {id} = props.match.params;
  return (
    <div>
      SearchComponent - {id}
      <Link to={"/search/" + id + "/detail"}>详情</Link>
      <Route path={"/search/:" + id + "/detail"} component={DetailComponent}/>
    </div>
  );
}


export default RouterPage;
// export default connect(s => s,)(RouterPage);
