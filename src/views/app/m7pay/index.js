import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import Start from './start'
import Onboarding from './onboarding'

const M7Pay = ({match}) => (
  <div className="dashboard-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/start`} />
      <Route path={`${match.url}/start`} component={Start} />
      <Route path={`${match.url}/onboarding`} component={Onboarding} />
      <Redirect to="/error" />
    </Switch>
  </div>
)

export default M7Pay
