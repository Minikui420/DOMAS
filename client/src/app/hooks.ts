import { createSlice } from '@reduxjs/toolkit'
import { UserData } from '../interface/Interfaces'

export const hook = createSlice({
    name: 'domasApp',
    initialState: {
        dataToken: {
            token: '',
            refresh: ''
        } as UserData['dataToken'],
        dataLogin: {
            id: '',
            admin: false,
            email: '',
            username: '',
            createdAt: ''
        } as UserData['dataLogin'],
        isLogin: false
    },
    reducers: {
        setUserDataToken: (state, actio) => {
            state.dataToken = actio.payload as UserData['dataToken']
        },
        setUserDataLogin: (state, action) => {
            state.dataLogin = action.payload as UserData['dataLogin']
        },
        setIsLogin: state => {
            state.isLogin = !state.isLogin
        }
    }
})

export const { 
    setUserDataLogin, setIsLogin, setUserDataToken
 } = hook.actions

 export default hook.reducer