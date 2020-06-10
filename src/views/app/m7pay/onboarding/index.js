import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import StartOnboarding from './start'

const Onboarding = ({match}) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/start`} />
      <Route path={`${match.url}/start`} component={StartOnboarding} />
      <Redirect to="/error" />
    </Switch>
  </div>
)

export default Onboarding
