import { createSlice } from '@reduxjs/toolkit'
import { UserData, UserToken } from '../interface/Interfaces'

export const hook = createSlice({

    name: 'domasApp',
    initialState: {

        dataToken: {
            token: '',
            refreshToken: ''
        } as UserToken,

        dataLogin: {
            id: '',
            admin: false,
            email: '',
            username: '',
            createdAt: ''
        } as UserData,

        isLogin: false
    },
    reducers: {
        setUserDataToken: (state, actio) => {
            state.dataToken = actio.payload as UserToken
        },
        setUserDataLogin: (state, action) => {
            state.dataLogin = action.payload as UserData
        },
        setIsLogin: (state, action) => {
            state.isLogin = action.payload as boolean
        }
    }
})

export const { 
    setUserDataLogin, setIsLogin, setUserDataToken
 } = hook.actions

 export default hook.reducer