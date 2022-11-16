import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { signupAuth } from '../Redux_Tool/Reducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { signupSchema } from './Validation';
import { Formik, Form, Field } from 'formik';


export const SignupUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // const [check,setCheck] = useState()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const message = useSelector((state) => state?.post?.user)
    console.log(62, message)

    useEffect(() => {
        if (message && message?.message?.includes('successfully')) {
            toast.success(message?.message);
        }
        else {
            toast.error(message?.response?.data?.error);
        }
    }, [message])

    return (
        <>
            <div className='container'>
                <div className='login-box'>

                    <div>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                password: '',
                            }}
                            validationSchema={signupSchema}
                            onSubmit={values => {
                                dispatch(signupAuth(values))
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>

                                    <div className="form-group">
                                        <label htmlFor="name" className='handleLabel mt-3'>Name</label>
                                        <Field
                                            type="name"
                                            name="name"
                                            className="form-control"
                                            placeholder="Enter name"
                                            autoComplete="off"
                                        />{errors.name && touched.name ?
                                            <div className='handleError'>{errors.name}</div>
                                            : null}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email" className='handleLabel mt-3'>Email</label>
                                        <Field
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                            autoComplete="off"
                                        />{errors.email && touched.email ?
                                            <div className='handleError'>{errors.email}</div>
                                            : null}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password" className="handleLabel mt-3">
                                            Password
                                        </label>
                                        <Field
                                            type="password"
                                            name="password"
                                            className='form-control'
                                            placeholder="Enter password"
                                        />
                                        {errors.password && touched.password ? (
                                            <div className='handleError'>{errors.password}</div>
                                        ) : null}
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block mt-4"
                                    >
                                        Submit
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

