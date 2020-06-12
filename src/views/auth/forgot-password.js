import React from 'react'
import {NavLink} from 'react-router-dom'
import {Row, Card, CardTitle} from 'reactstrap'
import {Formik} from 'formik'
import {Helmet} from 'react-helmet'

import {Colxx} from '../../components/common/CustomBootstrap'
import {ForgotPasswordSchema} from '../../helpers/ValidationSchemas'
import IntlMessages from '../../helpers/IntlMessages'
import ForgotPasswordForm from '../../components/pages/auth/ForgotPasswordForm'

const ForgotPassword = () => {
  const initialValues = {
    email: '',
  }

  const onPasswordSubmit = (values, {setSubmitting}) => {
    console.log(values)
    // eslint-disable-next-line no-alert
    alert('Password Reset success!')
    setSubmitting(false)
  }

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Helmet>
          <title>Forgot Password | m7Pay</title>
        </Helmet>
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
            <CardTitle className="h5 mb-4">
              <IntlMessages id="user.forgot-password" />
            </CardTitle>
            <Formik
              initialValues={initialValues}
              validationSchema={ForgotPasswordSchema}
              onSubmit={onPasswordSubmit}
              component={ForgotPasswordForm}
            />
            <div className="mt-2">
              New User?{' '}
              <NavLink to="/auth/register" className="primary-red">
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

export default ForgotPassword
