import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "../../layout/AuthLayout";

import login from "./login";
import register from "./register";
import forgotPassword from "./forgot-password";

const User = ({ match }) => {
  return (
    <AuthLayout>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} />
        <Route path={`${match.url}/login`} component={login} />
        <Route path={`${match.url}/register`} component={register} />
        <Route
          path={`${match.url}/forgot-password`}
          component={forgotPassword}
        />
        <Redirect to="/error" />
      </Switch>
    </AuthLayout>
  );
};

export default User;
