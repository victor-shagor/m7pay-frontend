import React, {Component} from 'react'
import {Row, Card, CardTitle, Form, Label, Input, Button} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import {Colxx} from '../../components/common/CustomBootstrap'
import IntlMessages from '../../helpers/IntlMessages'

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'demo@gogo.com',
    }
  }
  render() {
    return (
      <Row className="h-100">
        <Colxx xxs="12" md="10" className="mx-auto my-auto">
          <Card className="auth-card">
            <div className="position-relative image-side ">
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
              <CardTitle className="mb-4">
                <IntlMessages id="user.forgot-password" />
              </CardTitle>
              <Form>
                <Label className="form-group has-float-label mb-4">
                  <Input type="email" defaultValue={this.state.email} />
                  <IntlMessages id="user.email" />
                </Label>

                <div className="d-flex justify-content-end align-items-center">
                  <Button
                    href="/app"
                    color="primary"
                    className="btn-shadow btn-auth btn-block"
                    size="lg"
                  >
                    <IntlMessages id="user.reset-password-button" />
                  </Button>
                </div>
              </Form>
              <div className="mt-2">
                New User?{' '}
                <NavLink to={`/auth/register`} className="primary-red">
                  <span className="font-weight-bold">
                    <IntlMessages id="user.register-link" />
                  </span>
                </NavLink>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-4 auth-footer">
                <div className="text-muted mt-4">
                  <IntlMessages id="user.login-terms-full" /> |{' '}
                  <IntlMessages id="user.login-privacy-full" />
                </div>
              </div>
            </div>
          </Card>
        </Colxx>
      </Row>
    )
  }
}
