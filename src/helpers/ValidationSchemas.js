import * as Yup from 'yup'

export const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .email('Valid email is required'),
  password: Yup.string()
    .required('Required')
    .min(5, 'Too short')
    .test(
      'password-strength',
      'Password must contain at least 1 lowercase, 1 uppercase, 1 number and 8 characters',
      function passwordStrength(value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
      },
    ),
  country: Yup.string().required('Please select country'),
})

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .email('Valid email is required'),
  password: Yup.string()
    .required('Required')
    .min(5, 'Too short')
    .test(
      'password-strength',
      'Password must contain at least 1 lowercase, 1 uppercase, 1 number and 8 characters',
      function passwordStrength(value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
      },
    ),
})

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required('error.required')
    .min(2, 'error.tooShort')
    .max(50, 'error.tooLong')
    .email('error.invalid.email'),
})
