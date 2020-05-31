import React from 'react'
import {useLocation} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {Colxx} from '../../components/common/CustomBootstrap'
import {Card, Row} from 'reactstrap'
import RegSuccess from '../../assets/img/reg-success.svg'
import IntlMessages from '../../helpers/IntlMessages'

const RegisterSuccess = () => {
  const location = useLocation()
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
            <img
              src={RegSuccess}
              alt="registration success"
              className="reg-success-img"
            />
            <h4>Congratulations !!</h4>
            <p className="mb-4">Your account has been created.</p>
            <p className="mb-0">We have sent a confirmation email to</p>
            <p className="font-weight-bold mb-4">
              {location.state ?? 'johndoe@email.com'}
            </p>
            <p className="mb-4">
              Please click the link in the email to confirm your account.
            </p>
            <p className="mb-4">
              If you cannot find the email in your inbox, please check your junk
              or spam folder.
            </p>
            <p>
              <span>
                <IntlMessages id="user.register-success-trouble" />{' '}
              </span>
              <span className="primary-red font-weight-bold">
                <IntlMessages id="user.register-success-support" />
              </span>
            </p>
          </div>
        </Card>
      </Colxx>
    </Row>
  )
}

export default RegisterSuccess
