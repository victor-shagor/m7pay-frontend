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
