import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
  .required('Email is required')
  .email('Email is invalid'),
password: Yup.string()
  .required('Password is required')
  .min(6, 'Password must be at least 6 characters')
  .max(25, 'Password must not exceed 25 characters'),
  });

  export const signupSchema = Yup.object().shape({
    name: Yup.string()
    .required('Name is required')
    .min(4, 'Name must be at least 4 characters')
    .max(25, 'Name must not exceed 25 characters'),
    email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
    password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(25, 'Password must not exceed 25 characters'),
    });