import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAuth } from '../Redux_Tool/Reducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginSchema } from './Validation';
import { Formik, Form, Field } from 'formik';
import {SyncLoader} from "react-spinners";


export const LoginUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    let data = useSelector((state) => state.post);


    if (data?.user?.data?.token !== null) {
        localStorage.setItem("userToken", data?.user?.data?.token);
    }
    useEffect(()=>{},[])

    useEffect(() => {
        if (data?.user?.status == 200) {
            toast.success(data.status, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                if (data.user.data.token !== null) {
                    navigate("/dashboard");
                    // window.location = '/dashboard'
                }
            }, 1000);
        } else {
            toast.error(data?.error?.response?.data?.msg, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [data]);
    
    return (
        <>
            <div className='container '>
                <div className='row login-box'>
                <div className='col-lg-4'  >
                    <div >
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={loginSchema}
                            onSubmit={values => {
                                setLoading(true)
                                dispatch(loginAuth(values))
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
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
                                    >{loading ? <SyncLoader color="#36d7b7" size={15} />
                                        : "Submit"}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                </div>
            </div>
            <ToastContainer  />
        </>
    )
}

{/* <div className='container-fluid'>
      <div className='row' style={{height:"400px"}}>
      <div className='col-lg-2 col-sm-12' style={{backgroundColor:"grey" ,color:"white", border:"2px dotted black"}}>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe hic impedit, in odio quidem laborum dignissimos dolor aperiam est deserunt cupiditate suscipit ex numquam autem voluptates fuga, non fugiat!</p>
       </div>
       <div className='col-lg-8 col-sm-12 container' style={{backgroundColor:"grey" ,color:"white", border:"2px dotted black"}}>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe hic impedit, in odio quidem laborum dignissimos dolor aperiam est deserunt cupiditate suscipit ex numquam autem voluptates fuga, non fugiat!</p>
       </div>
       <div className='col-lg-2 col-sm-12' style={{backgroundColor:"grey" ,color:"white", border:"2px dotted black"}}>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe hic impedit, in odio quidem laborum dignissimos dolor aperiam est deserunt cupiditate suscipit ex numquam autem voluptates fuga, non fugiat!</p>
       </div>
      </div>
    </div> */}