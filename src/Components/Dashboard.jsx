import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { deletePost, showPost } from '../Redux_Tool/Reducer'
import { CreateModel } from './CreateModel'
import { UpdateModel } from './UpdateModel'

export const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [isVisible, setIsVisible] = useState(false)
    const [opened, setOpened] = useState(false);

    const [isVisibleUpdate, setIsVisibleUpdate] = useState(false)
    const [modelOpen, setModelOpen] = useState(false);

    const [updateData, setUpdateData] = useState()
    const [loading, setLoading] = useState(false)

    const data = useSelector((state) => state?.post?.post)
    const status = useSelector((state) => state?.post?.postCrud)
    const message = useSelector((state) => state?.post?.user?.token)

    useEffect(() => {
        dispatch(showPost())
    }, [status, message])

    useEffect(() => {
        dispatch(showPost())
    })

    const logout = () => {
        localStorage.removeItem("userToken")
        navigate("/")
    }

    const deleteData = (id) => {
        dispatch(deletePost(id))
    }

    const createData = () => {
        setIsVisible(true)
        setOpened(true)
    }

    const editData = (data) => {
        setUpdateData(data)
        setIsVisibleUpdate(true)
        setModelOpen(true)
    }

    const viewPost = (id) => {
        navigate(`/view/${id}`)
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row' style={{ height: "400px" }}>
                    <div className='col-lg-2 col-sm-12' >
                        <button className='btn btn-warning' style={{ margin: "15px" }} onClick={() => createData()}>Create</button>
                        <button className='logout-btn btn btn-danger' onClick={logout}>Log Out</button>
                    </div>
                    <div className='col-lg-8 col-sm-12 container' >

                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{item?._id}</th>
                                            <td>{item?.name}</td>
                                            <td>{item?.age}</td>
                                            <td>{item?.city}</td>
                                            <td>
                                                <button className='btn btn-outline-success' onClick={() => viewPost(item._id)} >View</button>
                                                <button onClick={() => deleteData(item._id)} className='btn btn-outline-danger' style={{ margin: "0px 20px" }}  >Delete</button>
                                                <button className='btn btn-outline-secondary' onClick={() => editData(item)} >Edit</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg-2 col-sm-12' >


                    </div>
                </div>

            </div>
            {isVisible ? <CreateModel opened={opened} setOpened={setOpened} /> : null}
            {isVisibleUpdate ? <UpdateModel modelOpen={modelOpen} setModelOpen={setModelOpen} data={updateData} /> : null}
        </>
    )
}

