import React from 'react'
import {Button, Form, FormGroup} from 'reactstrap'
import {Field} from 'formik'
import IntlMessages from '../../../helpers/IntlMessages'
import CustomFormInput from '../../common/CustomFormInput'
import CustomFormSelect from '../../common/CustomFormSelect'

const countries = [
  {label: 'Nigeria', value: 'Nigeria'},
  {label: 'Kenya', value: 'Kenya'},
  {label: 'South Africa', value: 'South Africa'},
]

const SignupForm = ({handleSubmit, isValid, isSubmitting}) => (
  <Form className="av-tooltip tooltip-label-right" onSubmit={handleSubmit}>
    <FormGroup className="has-float-label error-l-100 mb-4">
      <Field
        component={CustomFormInput}
        name="email"
        type="email"
        testId="email"
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
    <FormGroup className="has-float-label error-l-100 mb-2">
      <Field
        component={CustomFormSelect}
        name="country"
        type="text"
        testId="country"
        placeholder="Choose your country"
        options={countries}
      />
    </FormGroup>
    <div className="mt-1 mb-4 auth-footer">
      <span className="text-muted">
        <IntlMessages id="user.register-country-none" />{' '}
      </span>
      <IntlMessages id="user.register-country-add" />
    </div>
    <Button
      color="primary"
      className="btn-shadow btn-block font-weight-normal btn-auth"
      size="lg"
      type="submit"
      disabled={!isValid || isSubmitting}
    >
      <IntlMessages id="user.register-button" />
    </Button>
    <div className="mt-3">
      <span>
        <IntlMessages id="user.register-agree" />
      </span>
      <span className="primary-red font-weight-bold">
        <IntlMessages id="user.register-terms" />
      </span>
    </div>
  </Form>
)

export default SignupForm
