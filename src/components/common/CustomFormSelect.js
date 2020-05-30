import React from 'react'
import Select from 'react-select'
import IntlMessages from '../../helpers/IntlMessages'

const CustomFormSelect = ({
  field,
  form: {touched, errors, setFieldValue},
  className,
  placeholder,
  testId,
  options,
  multiple = false,
  required = false,
}) => {
  const errorMessage = errors[field.name]
  return (
    <>
      <Select
        {...field}
        className={`react-select ${className}`}
        classNamePrefix="react-select"
        id={field.name}
        required={required}
        placeholder={placeholder}
        isMulti={multiple}
        options={options}
        value={typeof field.value === 'string' ? field.value : undefined}
        onChange={(data) => setFieldValue(field.name, data)}
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

export default CustomFormSelect
