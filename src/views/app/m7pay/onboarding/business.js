import React, {useState} from 'react'
import {Row, Button} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {Colxx} from '../../../../components/common/CustomBootstrap'
import PersonalDataCard from '../../../../components/pages/onboarding/PersonalDataCard'
import BusinessDataCard from '../../../../components/pages/onboarding/BusinessDataCard'

const BusinessOnboarding = () => {
  const [personalDataValid, setPersonalDataValid] = useState(false)
  // const [idProofValid, setIdProofValid] = useState(false)
  const [businessDataValid, setBusinessDataValid] = useState(false)
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
            disabled={!personalDataValid && !businessDataValid}
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
          <PersonalDataCard
            personalFormValid={personalDataValid}
            setPersonalFormValid={setPersonalDataValid}
          />
        </Colxx>
      </Row>
      <Row className="mt-4">
        <Colxx xxs="12">
          <BusinessDataCard
            businessFormValid={businessDataValid}
            setBusinessFormValid={setBusinessDataValid}
          />
        </Colxx>
      </Row>
    </>
  )
}

export default BusinessOnboarding
