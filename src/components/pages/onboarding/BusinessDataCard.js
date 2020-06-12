import React, {useState} from 'react'
import {Formik} from 'formik'
import {Card, CardBody, Collapse, Row} from 'reactstrap'
import log from 'loglevel'
import {Colxx} from '../../common/CustomBootstrap'
import BusinessData from '../../../assets/img/business-data.svg'
import FormError from '../../../assets/img/checkmark-error.svg'
// import FormSuccess from '../../../../assets/img/checkmark-success.svg'
import {BusinessDataSchema} from '../../../helpers/ValidationSchemas'
import BusinessDataForm from './BusinessDataForm'

const BusinessDataCard = () => {
  const [collapseOpen, setCollapseOpen] = useState(false)
  const toggleCollapse = () => setCollapseOpen(!collapseOpen)
  const initialValues = {
    businessName: '',
    phone: '',
    email: '',
    website: '',
    currency: '',
    bankName: '',
    bankAcctName: '',
    bankAcctNo: '',
    businessAddress: '',
    state: '',
    country: '',
    postalCode: '',
  }
  const submitPersDetails = (values /*, {setSubmitting}*/) => {
    log.warn(values)
  }
  return (
    <Card>
      <CardBody className="pt-4 pb-2" onClick={toggleCollapse}>
        <Row>
          <Colxx md="1" className="d-flex justify-content-center">
            <img
              src={BusinessData}
              alt="business data"
              className="img-fluid"
              style={{width: '3rem'}}
            />
          </Colxx>
          <Colxx md="10">
            <h6 className="font-weight-bold">Business Data</h6>
            <p>
              Please provide your business details and local bank settlement
              account for payouts
            </p>
          </Colxx>
          <Colxx md="1" className="text-center d-flex justify-content-center">
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
                validationSchema={BusinessDataSchema}
                component={BusinessDataForm}
                onSubmit={submitPersDetails}
              />
            </div>
          </Collapse>
        </CardBody>
      ) : null}
    </Card>
  )
}

export default BusinessDataCard
