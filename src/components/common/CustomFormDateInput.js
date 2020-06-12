import React from 'react'
import DatePicker from 'react-datepicker'
import IntlMessages from '../../helpers/IntlMessages'
import 'react-datepicker/dist/react-datepicker.css'

/* Reusable Form Date Input */
/* Important Notes */
// Intl Message is tied to field name so in cases of duplicate names,
// for example user full name or business name, then the fields should
// be named and translated accordingly. For example, user.name and
// user.businessName along with input names as name and businessName
// respectively
const CustomFormDateInput = ({
  field,
  form: {touched, errors, values, setFieldValue},
  testId,
  dateFormat = 'MM/dd/yyyy',
  maxDate = undefined,
  defaultDate,
}) => {
  const errorMessage = errors[field.name]
  return (
    <>
      <DatePicker
        {...field}
        id={field.name}
        dateFormat={dateFormat}
        selected={values[field.name] || defaultDate}
        onChange={(date) => setFieldValue(field.name, date)}
        maxDate={maxDate}
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

export default CustomFormDateInput
