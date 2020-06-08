import React from 'react'
import {Redirect /*, useHistory*/} from 'react-router-dom'
import {useSelector /*, useDispatch*/} from 'react-redux'
import {Row, Card, CardTitle} from 'reactstrap'
import {Formik} from 'formik'
import {Helmet} from 'react-helmet'

// import {loginUser} from '../../redux/actions'
import {selectUser /*selectLoadingStatus*/} from '../../redux/selectors'
import {Colxx} from '../../components/common/CustomBootstrap'
import IntlMessages from '../../helpers/IntlMessages'
import {LoginSchema} from '../../helpers/ValidationSchemas'
import LoginForm from '../../components/pages/LoginForm'

const Login = () => {
  const user = useSelector(selectUser)
  // const loading = useSelector(selectLoadingStatus)
  // const dispatch = useDispatch()
  // const history = useHistory()
  // const email = 'demo@m7pay.com'
  // const password = 'gogo123'
  const initialValues = {
    email: '',
    password: '',
  }

  const onUserLogin = (values, {setSubmitting}) => {
    console.log(values)
    // dispatch(loginUser(values, history))
    // eslint-disable-next-line no-alert
    alert('Login success!')
    setSubmitting(false)
  }
  return (
    <div>
      {user ? (
        <Redirect to="/" />
      ) : (
        <Row className="h-100">
          <Colxx xxs="12" md="10" className="mx-auto my-auto">
            <Helmet>
              <title>Login | m7Pay</title>
            </Helmet>
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
                <Formik
                  initialValues={initialValues}
                  validationSchema={LoginSchema}
                  onSubmit={onUserLogin}
                  component={LoginForm}
                />
              </div>
            </Card>
          </Colxx>
        </Row>
      )}
    </div>
  )
}

export default Login
