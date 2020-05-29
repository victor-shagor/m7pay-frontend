import React, {lazy} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import AuthLayout from '../../layout/AuthLayout'
import Login from './login'
import Register from './register'
const ForgotPassword = lazy(() => import('./forgot-password'))

const User = ({match}) => {
  return (
    <AuthLayout>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} />
        <Route path={`${match.url}/login`} component={Login} />
        <Route path={`${match.url}/register`} component={Register} />
        <Route
          path={`${match.url}/forgot-password`}
          component={ForgotPassword}
        />
        <Redirect to="/error" />
      </Switch>
    </AuthLayout>
  )
}

export default User
