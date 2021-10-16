import { createSlice } from '@reduxjs/toolkit'
import { StoreData } from '../interface/Interfaces'


export const hook = createSlice({

    name: 'domasApp',
    initialState:{
        localPath: '',
        toResult: false,
        activity: 'KTP',
        kk_data: {
            no_kk: '',
            family_head: '',
            rt_rw: '',
            village: 'DOMAS',
            distric: 'PONTANG',
            city: 'SERANG',
            zip: '42192',
            province: 'BANTEN'
        } 
    } as StoreData,
    reducers: {
        setLocalPath: (state, action) => {
            state.localPath = action.payload
        },
        setToResult: (state, action) => {
            state.toResult = action.payload
        },
        setKKData: (state, action) => {
            state.kk_data = action.payload
        },
        setActivity: (state, action) => {
            state.activity = action.payload
        },
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
            state.localPath = ''
            state.isLogin = false
            state.toResult = false
            state.path = undefined
        }
    }
})

export const { 
    setUserDataLogin, setIsLogin, setUserDataToken,
    setPath, setActivity, setKKData, setToResult, reset,
    setLocalPath
 } = hook.actions

 export default hook.reducer