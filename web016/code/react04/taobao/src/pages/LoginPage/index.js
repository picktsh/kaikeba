import React, { Component } from "react";
import PageLayout from "../../layout/PageLayout";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export default connect(({ user }) => ({ user }), {
    loginClick: () => ({ type: "loginSuccess" })
})(
    class LoginPage extends Component {
        render() {
            const { user, loginClick, location } = this.props;
            const { isLogin } = user;
            if (isLogin) {
                const redirect =
                    (location.state && location.state.redirect) || "/";
                return <Redirect to={redirect} />;
            }
            return (
                <PageLayout>
                    LoginPage
                    <button onClick={loginClick}>login</button>
                </PageLayout>
            );
        }
    }
);
