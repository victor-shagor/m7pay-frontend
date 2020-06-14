import React, {useState} from 'react'
import {Formik} from 'formik'
import {Card, CardBody, Collapse, Row} from 'reactstrap'
import log from 'loglevel'
import {Colxx} from '../../common/CustomBootstrap'
import IdProof from '../../../assets/img/id-temp.svg'
import FormError from '../../../assets/img/checkmark-error.svg'
import FormSuccess from '../../../assets/img/checkmark-success.svg'
import {IdProofSchema} from '../../../helpers/ValidationSchemas'
import IdProofForm from './IdProofForm'

const IdProofCard = ({idProofFormValid, setIdProofFormValid}) => {
  const [collapseOpen, setCollapseOpen] = useState(false)
  const toggleCollapse = () => setCollapseOpen(!collapseOpen)
  const [selectedImg, setSelectedImg] = useState(null)
  const initialValues = {
    idType: '',
    idImage: null,
  }
  const getImageMeta = (imageFile) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      if (reader.result) setSelectedImg(reader.result)
    }
    reader.readAsDataURL(imageFile)
  }
  const imageUpload = (img) => {
    console.log(img)
    // setSelectedImg(img)
    getImageMeta(img)
  }
  const submitIdDetails = (values, {setSubmitting}) => {
    log.warn(values)
    // Post API submit
    setIdProofFormValid(true)
    setSubmitting(false)
  }
  return (
    <Card>
      <CardBody className="pt-4 pb-2" onClick={toggleCollapse}>
        <Row>
          <Colxx md="1" className="d-flex justify-content-center">
            <img
              src={IdProof}
              alt="proof of identity"
              className="img-fluid"
              style={{width: '3rem'}}
            />
          </Colxx>
          <Colxx md="10">
            <h6 className="font-weight-bold">Proof of Identity</h6>
            <p>
              Please take a photo of your National ID Card, Driver’s Licence or
              Int’l Passport. The photo must be clear, text on the ID card
              should be easy to read and all corners of the ID must be visible.
            </p>
          </Colxx>
          <Colxx md="1" className="text-center d-flex justify-content-center">
            <img
              src={idProofFormValid ? FormSuccess : FormError}
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
                validationSchema={IdProofSchema}
                children={(props) => (
                  <IdProofForm
                    {...props}
                    imageUpload={imageUpload}
                    displayedImg={selectedImg}
                  />
                )}
                onSubmit={submitIdDetails}
              />
            </div>
          </Collapse>
        </CardBody>
      ) : null}
    </Card>
  )
}

export default IdProofCard
