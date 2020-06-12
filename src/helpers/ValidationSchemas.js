import * as Yup from 'yup'

export const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .required('error.required')
    .min(2, 'error.tooShort')
    .max(50, 'error.tooLong')
    .email('error.invalid.email'),
  password: Yup.string()
    .required('error.required')
    .min(5, 'error.tooShort')
    .test(
      'password-strength',
      'error.invalid.password',
      function passwordStrength(value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
      },
    ),
  country: Yup.string().required('Please select country'),
})

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('error.required')
    .min(2, 'error.tooShort')
    .max(50, 'error.tooLong')
    .email('error.invalid.email'),
  password: Yup.string()
    .required('error.required')
    .min(5, 'error.min.password'),
})

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required('error.required')
    .min(2, 'error.tooShort')
    .max(50, 'error.tooLong')
    .email('error.invalid.email'),
})

export const PersonalDataSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('error.required')
    .min(2, 'error.tooShort')
    .max(50, 'error.tooLong'),
  lastName: Yup.string()
    .required('error.required')
    .min(2, 'error.tooShort')
    .max(50, 'error.tooLong'),
  dob: Yup.date().required('error.required'),
  address: Yup.string()
    .required('error.required')
    .min(10, 'error.tooShort')
    .max(60, 'error.tooLong'),
  state: Yup.string().required('error.state'),
  country: Yup.string().required('error.country'),
  phone: Yup.string()
    .required('error.required')
    .matches(/^[0]\d{10}$/, 'error.invalid.phone'),
})

export const BusinessDataSchema = Yup.object().shape({
  businessName: Yup.string()
    .required('error.required')
    .min(7, 'error.tooShort')
    .max(50, 'error.tooLong'),
  phone: Yup.string()
    .required('error.required')
    .matches(/^[0]\d{10}$/, 'error.invalid.phone'),
  email: Yup.string()
    .required('error.required')
    .min(8, 'error.tooShort')
    .max(50, 'error.tooLong')
    .email('error.invalid.email'),
  website: Yup.string().min(5, 'tooShort').max(50, 'tooLong'),
  currency: Yup.string().required('error.required'),
  bankName: Yup.string().required('error.required'),
  bankAcctName: Yup.string()
    .required('error.required')
    .min(8, 'error.tooShort')
    .max(50, 'error.tooLong'),
  bankAcctNo: Yup.string()
    .required('error.required')
    .matches(/^\d{10}$/, 'error.invalid.bankAcctNo'),
  businessAddress: Yup.string()
    .required('error.required')
    .min(10, 'error.tooShort')
    .max(60, 'error.tooLong'),
  state: Yup.string().required('error.state'),
  country: Yup.string().required('error.country'),
  postalCode: Yup.string()
    .required('error.required')
    .matches(/^\d{5,6}$/, 'error.invalid.postalCode')
    .max(6, 'error.tooLong'),
})
