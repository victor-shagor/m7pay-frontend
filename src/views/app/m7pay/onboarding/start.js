import React, {Fragment} from 'react'
import {Row, Card, CardBody, Button} from 'reactstrap'
import {Helmet} from 'react-helmet'
import {Colxx} from '../../../../components/common/CustomBootstrap'
import BusinessReg from '../../../../assets/img/business-reg.svg'
import PersonalReg from '../../../../assets/img/personal-reg.svg'

const StartOnboarding = () => {
  return (
    <Fragment>
      <Helmet>
        <title> Onboarding Start | M7Pay</title>
      </Helmet>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <h1 className="text-center font-weight-bold">
            Hello!! Welcome to M7Pay
          </h1>
          <p className="text-center">
            What type of Account would you like to create?
          </p>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="6" md={{offset: 2, size: 4}}>
          <Card>
            <CardBody>
              <div className="text-center mb-3">
                <img src={BusinessReg} alt="business registration" />
              </div>
              <h2 className="text-center">Business</h2>
              <p>
                Create a business account to easily accept cryptocurrency
                payments online, in-store or by invoice. Choose your payment
                settlement preferences and link your bank account to get
                started.
              </p>
              <div>
                <Button
                  color="transparent"
                  className="btn-acct-type btn-block mx-auto font-weight-bold"
                >
                  Select
                </Button>
              </div>
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="6" md={{size: 4}}>
          <Card>
            <CardBody>
              <div className="text-center mb-3">
                <img src={PersonalReg} alt="individual registration" />
              </div>
              <h2 className="text-center">Personal</h2>
              <p>
                Not a business? Create a personal account to buy, make payments
                , store and exchange cryptocurrencies at your local store,
                supermarkets, concerts, and more.
              </p>
              <div>
                <Button
                  color="transparent"
                  className="btn-acct-type btn-block mx-auto font-weight-bold"
                >
                  Select
                </Button>
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </Fragment>
  )
}
export default StartOnboarding
