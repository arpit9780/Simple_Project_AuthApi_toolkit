import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { viewPost } from '../Redux_Tool/Reducer'

export const ViewDetail = (props) => {

    let { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const viewData = useSelector((state) => state?.post?.view)

    useEffect(() => {
        dispatch(viewPost(id))
    }, [viewData])

    const back = () => {
        navigate("/dashboard")
    }

    return (<>
        <div className="container p-3 my-3 text-black    viewBox">
              <p>Id : {viewData._id}</p>
              <p>Name : {viewData.name}</p>
              <p>Age : {viewData.age} </p>
              <p>City : {viewData.city}</p>
             
            <button className='btn btn-danger btn-lg' onClick={back} >Back To Dashboard</button>
            {/* <button className='btn btn-success btn-lg' style={{marginLeft:"30px"}} onClick={back}  >Edit</button> */}
        </div>
        <div>
        </div>

    </>
    )
}
