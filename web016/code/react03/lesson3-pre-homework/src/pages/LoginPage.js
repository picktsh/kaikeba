import React, {Component} from "react";
import {Redirect} from "react-router-dom";

// import {connect} from "../kReactRedux";
import {connect} from "react-redux";

class LoginPage extends Component {
  login() {
    // 定义在 组件内的登陆方法
    this.props.login()
  }
  
  render() {
    const {isLogin, location} = this.props;
    const {redirect = "/"} = location.state || {};
    console.log("login-props", this.props); //sy-log
    if (isLogin) {
      // 已经登录
      return <Redirect to={redirect}/>;
    } else {
      return (
        <div>
          <h3>LoginPage</h3>
          <button onClick={() => this.login()}>login</button>
        </div>
      );
    }
  }
}

const mapDispatchToProps = {
  login: () => {
    return {type: "LOGIN"};
  },
  logout: () => {
    return {type: "LOGOUT"};
  }
}

// export default LoginPage
export default connect(s => s, mapDispatchToProps)(LoginPage)
