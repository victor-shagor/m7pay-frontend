import React from 'react'
import {Button, Form, FormGroup} from 'reactstrap'
import {Field} from 'formik'
import IntlMessages from '../../helpers/IntlMessages'
import CustomFormInput from '../../components/common/CustomFormInput'

const ForgotPasswordForm = ({handleSubmit, isValid, isSubmitting}) => (
  <Form className="av-tooltip tooltip-label-right" onSubmit={handleSubmit}>
    <FormGroup className="form-group has-float-label error-l-100 mb-4">
      <Field
        component={CustomFormInput}
        name="email"
        type="email"
        testId="email"
      />
    </FormGroup>

    <div className="d-flex justify-content-end align-items-center">
      <Button
        color="primary"
        className="btn-shadow btn-auth btn-block"
        type="submit"
        size="lg"
        disabled={!isValid || isSubmitting}
      >
        <IntlMessages id="user.reset-password-button" />
      </Button>
    </div>
  </Form>
)

export default ForgotPasswordForm
