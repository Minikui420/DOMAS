
import { RouteComponentProps } from 'react-router-dom'
import { WebStorage } from 'reduxjs-toolkit-persist/es/types'



export interface PersistConfig {
    key: string
    storage: WebStorage
}

export interface Props extends RouteComponentProps<any> {
    persist?: any
    temporer?: any
    setUserDataLogin?: any
    setUserDataToken?: any
    setIsLogin?: any
}

export interface State {
    email?: string
    password?: string
}

export interface User extends State {
    id?: string
    username?: string
}

export interface Req extends User, State {
    token?: string
}

export interface Path {
    login?: string
    signup?: string
    index?: string
    info?: string
    profil?: string
}

export interface UserData {
    dataLogin: {
        admin: boolean
        createdAt: string
        email: string
        id: string
    }
    dataToken: {
        token?: string
        refresh?: string
    }
    errors?: any
}

export interface StateToProps {
    persist?: any
    temporer?: any
}

export interface DispatchToProps {
    
}