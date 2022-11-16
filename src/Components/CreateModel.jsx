import React from 'react'
import { Modal, Button, Group } from '@mantine/core';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { createPost } from '../Redux_Tool/Reducer';
import { useNavigate } from 'react-router-dom';


export const CreateModel = (props) => {
    const dispatch =useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        dispatch(createPost(data))
    navigate("/dashboard")
    }
      return (
        <>
          <Modal
            opened={props.opened}
            onClose={() => props.setOpened(false)}
            title="Create New Post"
          >
             <form onSubmit={handleSubmit(onSubmit)}>
                        <div >
                            <label>Name </label>
                            <div >
                                <input  {...register("name")} />
                            </div>
                        </div >

                        <div >
                            <label >Age </label>
                            <div >
                                <input {...register("age")} />
                            </div>
                        </div>

                        <div >
                            <label >City </label>
                            <div >
                                <input {...register("city")} />
                            </div>
                        </div>

                        <Button type="submit" style={{marginTop:"10px"}} onClick={() => props.setOpened(false)}>Submit</Button>
                    </form>
          </Modal>
          <Group position="center">
          </Group>
        </>
      );
    
}
