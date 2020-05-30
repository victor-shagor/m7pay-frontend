import React from 'react'
import {Row, Card, CardTitle} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {Formik} from 'formik'
import {Helmet} from 'react-helmet'
import {registerUser} from '../../redux/actions'
import {SignupSchema} from '../../helpers/ValidationSchemas'
import IntlMessages from '../../helpers/IntlMessages'
import {Colxx} from '../../components/common/CustomBootstrap'
import SignupForm from '../../components/pages/SignupForm'

const Signup = () => {
  // const email = 'demo@gogo.com'
  // const password = 'gogo123'

  const initialValues = {
    email: '',
    password: '',
    country: '',
  }

  const onUserSignup = (values, {setSubmitting}) => {
    // props.history.push("/");
    // Send only country value instead of object... in saga
    // values.country = values.country.value
    console.log(values)
    // eslint-disable-next-line no-alert
    alert('Signup success!')
    setSubmitting(false)
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
              onSubmit={onUserSignup}
              component={SignupForm}
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
})(Signup)
