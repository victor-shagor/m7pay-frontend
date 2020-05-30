import React from 'react'
import {Input, Label} from 'reactstrap'
import IntlMessages from '../../helpers/IntlMessages'

/* Reusable Form Input */
/* Important Notes */
// Intl Message is tied to field name so in cases of duplicate names,
// for example user full name or business name, then the fields should
// be named and translated accordingly. For example, user.name and
// user.businessName along with input names as name and businessName
// respectively
const CustomFormInput = ({
  field,
  form: {touched, errors},
  placeholder,
  autoComplete = undefined,
  testId,
  type,
  required,
}) => {
  const errorMessage = errors[field.name]
  return (
    <>
      <Label className="mb-4">
        <span>
          <IntlMessages id={`user.${field.name}`} />
        </span>
      </Label>
      <Input
        type={type}
        {...field}
        id={field.name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      {errorMessage && touched[field.name] ? (
        <div className="invalid-feedback d-block" data-testid={testId}>
          <span>
            <IntlMessages
              id={typeof errorMessage === 'string' ? errorMessage : ''}
            />
          </span>
        </div>
      ) : null}
    </>
  )
}

export default CustomFormInput
