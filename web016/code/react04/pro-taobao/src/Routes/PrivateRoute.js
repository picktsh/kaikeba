import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

export default connect(({ user }) => ({ user }))(
    class PrivateRoute extends Component {
        render() {
            const { user, path, component, location } = this.props;
            const { isLogin } = user;
            if (isLogin) {
                return <Route path={path} component={component} />;
            }

            return (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {
                            redirect: location.pathname
                        }
                    }}
                />
            );
        }
    }
);
