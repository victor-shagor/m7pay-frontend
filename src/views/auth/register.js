import React from 'react'
import {
  Row,
  Card,
  CardTitle,
  Form,
  Label,
  Input,
  Button,
  FormGroup,
} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {Formik} from 'formik'
import Select from 'react-select'
import {Helmet} from 'react-helmet'
import {registerUser} from '../../redux/actions'
import {SignupSchema} from '../../helpers/ValidationSchemas'
import IntlMessages from '../../helpers/IntlMessages'
import {Colxx} from '../../components/common/CustomBootstrap'

const Register = () => {
  const email = 'demo@gogo.com'
  const password = 'gogo123'
  const country = 'Nigeria'

  const countries = [
    {label: 'Nigeria', value: 'Nigeria'},
    {label: 'Kenya', value: 'Kenya'},
    {label: 'South Africa', value: 'South Africa'},
  ]

  const initialValues = {
    email,
    password,
    country,
  }

  const onUserRegister = () => {
    if (email !== '' && password !== '') {
      // props.history.push("/");
      console.log('Success')
    }
  }

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Helmet>
          <title>Registration | m7Pay</title>
        </Helmet>
        <Card className="auth-card">
          <div className="position-relative signup-image-side">
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
            <div className="d-flex justify-content-between">
              <CardTitle className="h5 mb-4">
                <IntlMessages id="user.register-button" />
              </CardTitle>
              <div>
                <IntlMessages id="user.login-question" />{' '}
                <NavLink
                  to="/auth/login"
                  className="primary-red font-weight-bold"
                >
                  <IntlMessages id="user.login-text" />
                </NavLink>
              </div>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onValidSubmit={onUserRegister()}
              component={({
                /*isSubmitting, isValidating, error, */ handleSubmit,
              }) => (
                <Form
                  className="av-tooltip tooltip-label-right"
                  onSubmit={
                    handleSubmit
                  } /*loading={!isValidating && isSubmitting}*/
                >
                  <FormGroup className="error-l-75">
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
                    <Select
                      className="react-select"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      options={countries}
                      value={country}
                      onChange={(val) => console.log(val)}
                    />
                    <div className="mt-1 mb-4">
                      <span className="text-muted">
                        <IntlMessages id="user.register-country-none" />{' '}
                      </span>
                      <IntlMessages id="user.register-country-add" />
                    </div>
                    <Button
                      color="primary"
                      className="btn-shadow btn-block font-weight-normal btn-auth"
                      size="lg"
                      onClick={() => onUserRegister()}
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
                  </FormGroup>
                </Form>
              )}
            />
          </div>
        </Card>
      </Colxx>
    </Row>
  )
}

const mapStateToProps = ({authUser}) => {
  const {user, loading} = authUser
  return {user, loading}
}

export default connect(mapStateToProps, {
  registerUser,
})(Register)
