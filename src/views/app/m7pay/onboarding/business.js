import React from 'react'
import {Row, Button} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {Colxx} from '../../../../components/common/CustomBootstrap'

const BusinessOnboarding = () => {
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
          <Button color="transparent" className="btn-white btn-no-br btn-block">
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
    </>
  )
}

export default BusinessOnboarding
