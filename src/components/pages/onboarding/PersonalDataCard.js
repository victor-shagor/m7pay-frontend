import React, {useState} from 'react'
import {Formik} from 'formik'
import {Card, CardBody, Collapse, Row} from 'reactstrap'
import log from 'loglevel'
import {Colxx} from '../../common/CustomBootstrap'
import PersonalData from '../../../assets/img/personal-data.svg'
import FormError from '../../../assets/img/checkmark-error.svg'
// import FormSuccess from '../../../../assets/img/checkmark-success.svg'
import {PersonalDataSchema} from '../../../helpers/ValidationSchemas'
import PersonalDataForm from './PersonalDataForm'

const PersonalDataCard = () => {
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
              Please provide your personal data exactly as they appears on your
              government issued document (E.g. Int’l Passport, Drivers License,
              National ID card).
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
                validationSchema={PersonalDataSchema}
                component={PersonalDataForm}
                onSubmit={submitPersDetails}
              />
            </div>
          </Collapse>
        </CardBody>
      ) : null}
    </Card>
  )
}

export default PersonalDataCard
