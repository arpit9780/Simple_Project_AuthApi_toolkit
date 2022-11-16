import React, { useEffect, useState } from 'react'
import { Modal, Button, Group } from '@mantine/core';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updatePost } from '../Redux_Tool/Reducer';


export const UpdateModel = (props) => {
    const dispatch =useDispatch()
    const navigate = useNavigate()

    const [oldName,setOldName] = useState()
    const [oldAge,setOldAge] = useState()
    const [oldCity,setOldCity] = useState()
    const { register, handleSubmit } = useForm();

    useEffect(()=>{
        setOldName(props.data.name)
        setOldAge(props.data.age)
        setOldCity(props.data.city)

    },[props.data])

    const onSubmit = (data) => { 
        navigate("/dashboard")
        dispatch(updatePost([data,props.data._id]))
    }
      return (
        <>
          <Modal
            opened={props.modelOpen}
            onClose={() => props.setModelOpen(false)}
            title="Update Post"
          >
             <form onSubmit={handleSubmit(onSubmit)}>
                        <div >
                            <label>Name </label>
                            <div >
                                <input value={oldName} {...register("oldName")} onChange={(e)=>{setOldName(e.target.value)}}  />
                            </div>
                        </div >

                        <div >
                            <label >Age </label>
                            <div >
                                <input value={oldAge} {...register("oldAge")} onChange={(e)=>{setOldAge(e.target.value)}}  />
                            </div>
                        </div>

                        <div >
                            <label >City </label>
                            <div >
                                <input value={oldCity} {...register("oldCity")} onChange={(e)=>{setOldCity(e.target.value)}}  />
                            </div>
                        </div>

                        <Button type="submit" style={{marginTop:"10px"}} onClick={() => props.setModelOpen(false)}>Submit</Button>
                    </form>
          </Modal>
          <Group position="center">
          </Group>
        </>
      );
    
}
