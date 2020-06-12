import React from 'react'
import {Field} from 'formik'
import {Row, Col, Form, FormGroup, Button} from 'reactstrap'
import CustomFormInput from '../../common/CustomFormInput'
import CustomFormSelect from '../../common/CustomFormSelect'

const currencies = [
  {label: 'Naira', value: 'Naira'},
  {label: 'Dollar', value: 'Dollar'},
]

const banks = [
  {label: 'Access Bank', value: 'Access Bank'},
  {label: 'GTB', value: 'GTB'},
  {label: 'UBA', value: 'UBA'},
  {label: 'Zenith', value: 'Zenith'},
]

const states = [
  {label: 'Abia', value: 'Abia'},
  {label: 'Lagos', value: 'Lagos'},
  {label: 'Abuja', value: 'Abuja'},
]

const countries = [
  {label: 'Nigeria', value: 'Nigeria'},
  {label: 'Kenya', value: 'Kenya'},
  {label: 'South Africa', value: 'South Africa'},
]

const BusinessDataForm = ({handleSubmit, isValid, isSubmitting}) => (
  <Form className="av-tooltip tooltip-label-right" onSubmit={handleSubmit}>
    <FormGroup className="has-float-label error-l-100 mb-4">
      <Row>
        <Col>
          <Field
            component={CustomFormInput}
            name="businessName"
            type="text"
            testId="businessName"
          />
        </Col>
        <Col>
          <Field
            component={CustomFormInput}
            name="phone"
            type="text"
            testId="phone"
          />
        </Col>
        <Col>
          <Field
            component={CustomFormInput}
            name="email"
            type="email"
            testId="email"
          />
        </Col>
      </Row>
    </FormGroup>
    <FormGroup className="has-float-label error-l-100 mb-4">
      <Row>
        <Col>
          <Field
            component={CustomFormInput}
            name="website"
            type="text"
            testId="website"
          />
        </Col>
        <Col>
          <Field
            component={CustomFormSelect}
            name="currency"
            type="text"
            testId="currency"
            placeholder="Preferred Currency"
            options={currencies}
          />
        </Col>
        <Col>
          <Field
            component={CustomFormSelect}
            name="bankName"
            type="text"
            testId="bankName"
            placeholder="Local/Payout Bank"
            options={banks}
          />
        </Col>
      </Row>
    </FormGroup>
    <FormGroup className="has-float-label error-l-100 mb-4">
      <Row>
        <Col>
          <Field
            component={CustomFormInput}
            name="bankAcctName"
            type="text"
            testId="bankAcctName"
          />
        </Col>
        <Col>
          <Field
            component={CustomFormInput}
            name="bankAcctNo"
            type="text"
            testId="bankAcctNo"
          />
        </Col>
      </Row>
    </FormGroup>
    <FormGroup className="has-float-label error-l-100 mb-4">
      <Row>
        <Col>
          <Field
            component={CustomFormInput}
            name="businessAddress"
            type="text"
            testId="businessAddress"
          />
        </Col>
      </Row>
    </FormGroup>
    <FormGroup className="has-float-label error-l-100 mb-4">
      <Row>
        <Col>
          <Field
            component={CustomFormSelect}
            name="state"
            type="text"
            testId="state"
            placeholder="Choose your state"
            options={states}
          />
        </Col>
        <Col>
          <Field
            component={CustomFormSelect}
            name="country"
            type="text"
            testId="country"
            placeholder="Choose your country"
            options={countries}
          />
        </Col>
        <Col>
          <Field
            component={CustomFormInput}
            name="postalCode"
            type="text"
            testId="postalCode"
          />
        </Col>
      </Row>
    </FormGroup>
    <Button
      color="primary"
      className="btn-auth float-right"
      size="lg"
      type="submit"
      disabled={!isValid || isSubmitting}
    >
      Save Details
    </Button>
  </Form>
)

export default BusinessDataForm
