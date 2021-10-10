import { createSlice } from '@reduxjs/toolkit'
import { InitialState } from '../interface/Interfaces'


export const hook = createSlice({

    name: 'domasApp',
    initialState:{ } as InitialState,
    reducers: {
        setPath: (state, action) => {
            state.path = action.payload
        },
        setUserDataToken: (state, action) => {
            state.dataToken = action.payload
        },
        setUserDataLogin: (state, action) => {
            state.dataLogin = action.payload
        },
        setIsLogin: (state, action) => {
            state.isLogin = action.payload
        },
        reset: state => {
            state.dataLogin = {}
            state.dataToken = {}
            state.isLogin = false
        }
    }
})

export const { 
    setUserDataLogin, setIsLogin, setUserDataToken,
    setPath, reset
 } = hook.actions

 export default hook.reducer