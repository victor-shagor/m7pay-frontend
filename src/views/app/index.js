import React, {Component} from 'react'
import {Route, withRouter, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import AppLayout from '../../layout/AppLayout'
import m7Pay from './m7pay'
import secondMenu from './second-menu'
import blankPage from './blank-page'

class App extends Component {
  render() {
    const {match} = this.props
    return (
      <AppLayout>
        <Switch>
          <Route path={`${match.url}/`} component={m7Pay} />
          <Route path={`${match.url}/second-menu`} component={secondMenu} />
          <Route path={`${match.url}/blank-page`} component={blankPage} />
          <Redirect to="/error" />
        </Switch>
      </AppLayout>
    )
  }
}
const mapStateToProps = ({menu}) => {
  const {containerClassnames} = menu
  return {containerClassnames}
}

export default withRouter(connect(mapStateToProps, {})(App))
