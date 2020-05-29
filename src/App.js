import React, {Component, Suspense, Fragment} from 'react'
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import {IntlProvider} from 'react-intl'
import AppLocale from './lang'
import ErrorBoundary from './components/common/ErrorBoundary'
import ColorSwitcher from './components/common/ColorSwitcher'
import NotificationContainer from './components/common/react-notifications/NotificationContainer'
import {isMultiColorActive} from './constants/defaultValues'
import main from './views'
import app from './views/app'
import auth from './views/auth'
import error from './views/error'

class App extends Component {
  render() {
    const {locale} = this.props
    const currentAppLocale = AppLocale[locale]

    return (
      <div className="h-100">
        <Suspense fallback={<div className="loading" />}>
          <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
          >
            <ErrorBoundary>
              <Fragment>
                <NotificationContainer />
                {isMultiColorActive && <ColorSwitcher />}
                <Router>
                  <Switch>
                    <Route path="/app" component={app} />
                    <Route path="/auth" component={auth} />
                    <Route path="/error" exact component={error} />
                    <Route path="/" exact component={main} />
                    <Redirect to="/error" />
                  </Switch>
                </Router>
              </Fragment>
            </ErrorBoundary>
          </IntlProvider>
        </Suspense>
      </div>
    )
  }
}

const mapStateToProps = ({settings}) => {
  const {locale} = settings
  return {locale}
}
const mapActionsToProps = {}

export default connect(mapStateToProps, mapActionsToProps)(App)
