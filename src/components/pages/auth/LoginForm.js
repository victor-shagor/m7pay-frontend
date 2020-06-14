import React from 'react'
import {Button, Form, FormGroup} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import {Field} from 'formik'
import IntlMessages from '../../../helpers/IntlMessages'
import CustomFormInput from '../../common/CustomFormInput'

const LoginForm = ({handleSubmit, isValid, isSubmitting}) => (
  <Form className="av-tooltip tooltip-label-right mb-2" onSubmit={handleSubmit}>
    <FormGroup className="has-float-label error-l-100 mb-4">
      <Field
        component={CustomFormInput}
        name="email"
        type="email"
        testId="email"
        placeholder="user@m7pay.com"
      />
    </FormGroup>
    <FormGroup className="has-float-label error-l-100 mb-2">
      <Field
        component={CustomFormInput}
        name="password"
        type="password"
        testId="password"
      />
    </FormGroup>
    <div className="mb-4 font-weight-bold">
      <NavLink to="/auth/forgot-password">
        <IntlMessages id="user.forgot-password-question" />
      </NavLink>
    </div>
    <div className="d-flex justify-content-between align-items-center">
      <div>
        New User?{' '}
        <NavLink to="/auth/register" className="primary-red">
          <span className="font-weight-bold">
            <IntlMessages id="user.register-link" />
          </span>
        </NavLink>
      </div>
      <Button
        color="primary"
        className="btn-shadow btn-auth"
        size="lg"
        type="submit"
        disabled={!isValid || isSubmitting}
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
)

export default LoginForm
