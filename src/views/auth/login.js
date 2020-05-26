import React, {Component} from 'react'
import {Row, Card, CardTitle, Form, Label, Input, Button} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import {loginUser} from '../../redux/actions'
import {Colxx} from '../../components/common/CustomBootstrap'
import IntlMessages from '../../helpers/IntlMessages'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'demo@gogo.com',
      password: 'gogo123',
    }
  }
  onUserLogin() {
    if (this.state.email !== '' && this.state.password !== '') {
      this.props.loginUser(this.state, this.props.history)
    }
  }

  render() {
    return (
      <Row className="h-100">
        <Colxx xxs="12" md="10" className="mx-auto my-auto">
          <Card className="auth-card">
            <div className="position-relative image-side">
              <div>
                <p className="text-white h4">
                  Receive{' '}
                  <span className="primary-red font-weight-bold font-italic">
                    Bitcoin
                  </span>
                </p>
                <p className="white mb-0 h4">Payments Anywhere</p>
              </div>
            </div>
            <div className="form-side">
              <CardTitle className="mb-2 h5">
                <IntlMessages id="user.login-title" />
              </CardTitle>
              <div className="mb-3">
                <IntlMessages id="user.login-continue" />
              </div>
              <Form>
                <Label className="form-group has-float-label mb-4">
                  <Input type="email" defaultValue={this.state.email} />
                  <IntlMessages id="user.email" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                  <Input type="password" />
                  <IntlMessages
                    id="user.password"
                    defaultValue={this.state.password}
                  />
                </Label>
                <div className="mb-4 font-weight-bold">
                  <NavLink to={`/auth/forgot-password`}>
                    <IntlMessages id="user.forgot-password-question" />
                  </NavLink>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    New User?{' '}
                    <NavLink to={`/auth/register`} className="primary-red">
                      <span className="font-weight-bold">
                        <IntlMessages id="user.register-link" />
                      </span>
                    </NavLink>
                  </div>
                  <Button
                    color="primary"
                    className="btn-shadow btn-auth"
                    size="lg"
                    onClick={() => this.onUserLogin()}
                  >
                    <IntlMessages id="user.login-button" />
                  </Button>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-4 auth-footer">
                  <div className="mt-4">
                    <span className="text-muted">
                      <IntlMessages id="user.login-trouble" />{' '}
                    </span>
                    <span className="font-weight-bold">
                      <IntlMessages id="user.login-support" />
                    </span>
                  </div>
                  <div className="text-muted mt-4">
                    <IntlMessages id="user.login-terms" /> |{' '}
                    <IntlMessages id="user.login-privacy" />
                  </div>
                </div>
              </Form>
            </div>
          </Card>
        </Colxx>
      </Row>
    )
  }
}
const mapStateToProps = ({authUser}) => {
  const {user, loading} = authUser
  return {user, loading}
}

export default connect(mapStateToProps, {
  loginUser,
})(Login)
