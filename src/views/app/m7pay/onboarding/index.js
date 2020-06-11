import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import StartOnboarding from './start'
import BusinessOnboarding from './business'

const Onboarding = ({match}) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/start`} />
      <Route path={`${match.url}/start`} component={StartOnboarding} />
      <Route path={`${match.url}/business`} component={BusinessOnboarding} />
      <Redirect to="/error" />
    </Switch>
  </div>
)

export default Onboarding
