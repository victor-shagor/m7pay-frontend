import React, {useState} from 'react'
import {Row, Button, Card, CardBody, Collapse} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {Formik} from 'formik'
import log from 'loglevel'
import {Colxx} from '../../../../components/common/CustomBootstrap'
import PersonalData from '../../../../assets/img/personal-data.svg'
import FormError from '../../../../assets/img/checkmark-error.svg'
// import FormSuccess from '../../../../assets/img/checkmark-success.svg'
import {PersonalDataSchema} from '../../../../helpers/ValidationSchemas'
import PersonalDataForm from '../../../../components/pages/onboarding/PersonalDataForm'

const BusinessOnboarding = () => {
  const [collapseOpen, setCollapseOpen] = useState(false)
  const toggleCollapse = () => setCollapseOpen(!collapseOpen)
  const initialValues = {
    firstName: '',
    lastName: '',
    dob: 0,
    address: '',
    state: '',
    country: '',
    phone: '',
  }
  const submitPersDetails = (values /*, {setSubmitting}*/) => {
    log.warn(values)
  }
  return (
    <>
      <Helmet>
        <title> Onboarding Start | M7Pay</title>
      </Helmet>
      <Row>
        <Colxx xxs="4" md="2">
          <NavLink
            to="/app/onboarding/start"
            className="btn btn-transparent pl-0"
          >
            <h6 className="mb-0">
              <i className="iconsminds-left" />
              Back
            </h6>
          </NavLink>
        </Colxx>
        <Colxx xxs="4" md={{offset: 6, size: 4}} className="float-right">
          <Button
            color="transparent"
            className="btn-white btn-no-br btn-block btn-green-hover"
          >
            <h6 className="mb-0">Submit Verification</h6>
          </Button>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <h1>Business Verification</h1>
          <p>
            Please complete the KYC verification to start accepting payment.
            Verification will be processed within 1 business working day.
          </p>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Card>
            <CardBody className="pt-4 pb-2" onClick={toggleCollapse}>
              <Row>
                <Colxx md="1" className="d-flex justify-content-center">
                  <img
                    src={PersonalData}
                    alt="personal data"
                    className="img-fluid"
                    style={{width: '3rem'}}
                  />
                </Colxx>
                <Colxx md="10">
                  <h6 className="font-weight-bold">Personal Data</h6>
                  <p>
                    Please provide your personal data exactly as they appears on
                    your government issued document (E.g. Int’l Passport,
                    Drivers License, National ID card).
                  </p>
                </Colxx>
                <Colxx
                  md="1"
                  className="text-center d-flex justify-content-center"
                >
                  <img
                    src={FormError}
                    alt="form error"
                    className="img-fluid"
                    style={{width: '24px'}}
                  />
                </Colxx>
              </Row>
            </CardBody>
            {collapseOpen ? (
              <CardBody className="pt-0">
                <Collapse isOpen={collapseOpen}>
                  <div className="mt-4">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={PersonalDataSchema}
                      component={PersonalDataForm}
                      onSubmit={submitPersDetails}
                    />
                  </div>
                </Collapse>
              </CardBody>
            ) : null}
          </Card>
        </Colxx>
      </Row>
    </>
  )
}

export default BusinessOnboarding
