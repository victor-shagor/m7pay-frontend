import React from 'react'
import {Row, Card, CardTitle, Form, Label, Input, Button} from 'reactstrap'
import {NavLink, Redirect, useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import {loginUser} from '../../redux/actions'
import {selectUser /*selectLoadingStatus*/} from '../../redux/selectors'
import {Colxx} from '../../components/common/CustomBootstrap'
import IntlMessages from '../../helpers/IntlMessages'

const Login = () => {
  const user = useSelector(selectUser)
  // const loading = useSelector(selectLoadingStatus)
  const dispatch = useDispatch()
  const history = useHistory()
  const email = 'demo@gogo.com'
  const password = 'gogo123'

  const onUserLogin = () => {
    if (email !== '' && password !== '') {
      dispatch(loginUser({email, password}, history))
    }
  }
  return (
    <>
      {user ? (
        <Redirect to="/" />
      ) : (
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
                <CardTitle className="h5 mb-2">
                  <IntlMessages id="user.login-title" />
                </CardTitle>
                <div className="mb-3">
                  <IntlMessages id="user.login-continue" />
                </div>
                <Form>
                  <Label className="form-group has-float-label mb-4">
                    <Input type="email" defaultValue={email} />
                    <span>
                      <IntlMessages id="user.email" />
                    </span>
                  </Label>
                  <Label className="form-group has-float-label mb-4">
                    <Input type="password" defaultValue={password} />
                    <span>
                      <IntlMessages id="user.password" />
                    </span>
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
                      onClick={() => onUserLogin()}
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
      )}
    </>
  )
}

export default Login
