import React from 'react'
import {Field} from 'formik'
import {Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {subYears} from 'date-fns'
import CustomFormInput from '../../common/CustomFormInput'
import CustomFormSelect from '../../common/CustomFormSelect'
import CustomFormDateInput from '../../common/CustomFormDateInput'

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
const defaultDate = subYears(new Date(), 16)
const maxDate = subYears(new Date(), 16)

const PersonalDataForm = ({handleSubmit, isValid, isSubmitting}) => (
  <Form className="av-tooltip tooltip-label-right" onSubmit={handleSubmit}>
    <FormGroup className="has-float-label error-l-100 mb-4">
      <Row>
        <Col>
          <Field
            component={CustomFormInput}
            name="firstName"
            type="text"
            testId="firstName"
          />
        </Col>
        <Col>
          <Field
            component={CustomFormInput}
            name="lastName"
            type="text"
            testId="lastName"
          />
        </Col>
        <Col>
          <Field
            component={CustomFormDateInput}
            dateFormat="dd-MM-yyyy"
            maxDate={maxDate}
            name="dob"
            testId="dob"
            defaultDate={defaultDate}
          />
        </Col>
      </Row>
    </FormGroup>
    <FormGroup className="has-float-label error-l-100 mb-4">
      <Row>
        <Col>
          <Field
            component={CustomFormInput}
            name="address"
            type="text"
            testId="address"
          />
        </Col>
      </Row>
    </FormGroup>
    <FormGroup className="has-float-label error-l-100 mb-2">
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
            name="phone"
            type="text"
            testId="phone"
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

export default PersonalDataForm
