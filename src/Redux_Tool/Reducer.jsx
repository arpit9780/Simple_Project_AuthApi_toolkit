import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../Confige/Instance";

const initialState = {
    user: [],
    post: [],
    error: "",
    status: false,
    postCrud: "",
    view: []
}

export const loginAuth = createAsyncThunk("loginUser", async (data,{ rejectWithValue, fulfillWithValue }) => {
    const body = {
        email: data.email,
        password: data.password
    }
    try {
        const res = await instance.post('/login', body)
        return(fulfillWithValue(res))
    }
    catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})

export const signupAuth = createAsyncThunk("signupUser", async (data,{ rejectWithValue, fulfillWithValue }) => {
    const body = {
        name: data.name,
        email: data.email,
        password: data.password
    }
    try {
        const res = await instance.post('/register', body)
        return(fulfillWithValue(res.data))

    } catch (err) {
        return rejectWithValue(err.message)

    }
})

export const showPost = createAsyncThunk("showPost", async () => {
    try {
        const res = await instance.get('/get')
        return res.data
    }
    catch (error) {
        console.log("error",error);
    }
})

export const deletePost = createAsyncThunk("deletePost", async (id) => {
    try {
        const res = await instance.delete(`/delete/${id}`)
        return res.data
    }
    catch (error) {

    return error
    }
})

export const createPost = createAsyncThunk("createPost", async (data) => {
    const body = {
        "name": data.name,
        "age": data.age,
        "city": data.city,
    }
    try {
        const res = await instance.post("/post", body)
        return res.data

    }
    catch (error) {
       return error
    }
})

export const updatePost = createAsyncThunk("editPost", async (data) => {
    const body = {
        "name": data[0].oldName,
        "age": data[0].oldAge,
        "city": data[0].oldCity
    }
    try {
        const res = await instance.put(`/update/${data[1]}`, body)
        return res.data
    }
    catch (error) {
      return error
    }
})

export const viewPost = createAsyncThunk("viewPost", async (id) => {

    try {
        const res = await instance.get(`/get/${id}`)
        return res.data
    }
    catch (error) {
       return error
    }
})

// ------------------------------------------------>

export const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: {
        [loginAuth.pending]: (state) => {
            state.status = "loading"
        },
        [loginAuth.fulfilled]: (state, action) => {
            state.user = action.payload
            state.status = "succeed"
        },
        [loginAuth.rejected]: (state, action) => {
            console.log(52,action.payload)
            state.error = action.payload
            state.status = "failed"
        },

        [signupAuth.pending]: (state) => {
            console.log(333);
            state.status = "loading"
        },
        [signupAuth.fulfilled]: (state, action) => {
            console.log(222,action);
            state.user = action.payload
            state.state = "succeed"
        },
        [signupAuth.rejected]: (state, action) => {
            console.log(111,action);
            state.status = "failed"
            state.error = action.payload
        },

        [showPost.pending]: (state) => {
            state.status = 'loading'
        },
        [showPost.fulfilled]: (state, action) => {
            state.status = 'succeed'
            state.post = action.payload
        },
        [showPost.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },

        [deletePost.pending]: (state) => {
            state.status = 'loading'
        },
        [deletePost.fulfilled]: (state, action) => {
            state.status = 'succeed'
            state.postCrud = action.payload
        },
        [deletePost.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },

        [createPost.pending]: (state) => {
            state.status = 'loading'
        },
        [createPost.fulfilled]: (state, action) => {
            state.status = 'succeed'
            state.postCrud = action.payload
        },
        [createPost.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },

        [updatePost.pending]: (state) => {
            state.status = 'loading'
        },
        [updatePost.fulfilled]: (state, action) => {
            state.status = 'succeed'
            state.postCrud = action.payload
        },
        [updatePost.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },

        [viewPost.pending]: (state) => {
            state.status = 'loading'
        },
        [viewPost.fulfilled]: (state, action) => {
            state.status = 'succeed'
            state.view = action.payload
        },
        [viewPost.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },




    }
})

export const { } = postSlice.actions
export default postSlice.reducer

