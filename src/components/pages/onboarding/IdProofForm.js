import React from 'react'
import {Field} from 'formik'
import {Row, Col, Form, FormGroup, Button} from 'reactstrap'
import CustomFormSelect from '../../common/CustomFormSelect'
import IntlMessages from '../../../helpers/IntlMessages'

const idTypes = [
  {label: 'National ID Card', value: 'NationalIDCard'},
  {label: "Driver's License", value: 'DriversLicense'},
  {label: 'International Passport', value: 'InternationalPassport'},
]

const IdProofForm = ({
  handleSubmit,
  isValid,
  isSubmitting,
  errors,
  touched,
  setFieldValue,
  imageUpload,
  displayedImg,
}) => (
  <Form className="av-tooltip tooltip-label-right" onSubmit={handleSubmit}>
    <Row>
      <Col sm={{offset: 1, size: 11}}>
        <Row>
          <Col>
            <FormGroup className="has-float-label error-l-100 mb-4">
              <Field
                component={CustomFormSelect}
                name="idType"
                type="text"
                testId="idType"
                placeholder="Choose ID Type"
                options={idTypes}
              />
            </FormGroup>
          </Col>
          <Col>
            {displayedImg ? (
              <>
                <div className="dropzone-container">
                  <div className="img-thumbnail text-center">
                    <img
                      src={displayedImg}
                      alt="user id"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <FormGroup className="has-float-label error-l-100 mb-4">
                  <input
                    id="idImage"
                    name="idImage"
                    type="file"
                    accept="image/*"
                    style={{display: 'none'}}
                    onChange={(event) => {
                      setFieldValue('idImage', event.currentTarget.files[0])
                      imageUpload(event.currentTarget.files[0])
                    }}
                  />
                  <label
                    htmlFor="idImage"
                    className="btn btn-transparent btn-no-br btn-block mt-4"
                  >
                    Click to change image
                  </label>
                  {errors.idImage && touched.idImage ? (
                    <div className="invalid-feedback d-block">
                      <span>
                        <IntlMessages id={errors.idImage} />
                      </span>
                    </div>
                  ) : null}
                </FormGroup>
              </>
            ) : (
              <div className="dropzone-container">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="idImage" className="dropzone d-block" />
                <FormGroup className="has-float-label error-l-100 mb-4">
                  <input
                    id="idImage"
                    name="idImage"
                    type="file"
                    accept="image/*"
                    style={{display: 'none'}}
                    onChange={(event) => {
                      setFieldValue('idImage', event.currentTarget.files[0])
                      imageUpload(event.currentTarget.files[0])
                    }}
                  />
                  {errors.idImage && touched.idImage ? (
                    <div className="invalid-feedback d-block">
                      <span>
                        <IntlMessages id={errors.idImage} />
                      </span>
                    </div>
                  ) : null}
                </FormGroup>
              </div>
            )}
          </Col>
          <Col>
            <h6 className="font-weight-bold font-italic mb-4">
              Click icon to upload
            </h6>
            <p className="mt-2 mb-0">File size must not exceed 3MB.</p>
            <p className="mt-0">File type must be in JPG or PNG format.</p>
            <Button
              color="primary"
              className="btn-auth btn-no-br btn-block"
              disabled={!isValid || isSubmitting}
            >
              Save Details
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </Form>
)

export default IdProofForm
