
import { RouteComponentProps } from 'react-router-dom'
import { WebStorage } from 'reduxjs-toolkit-persist/es/types'


export interface PersistConfig {
    key: string
    storage: WebStorage
}

export interface Props extends StateToProps, DispatchToProps, RouteComponentProps<any> {
    
}

export interface State {
    email?: string
    password?: string
}

export interface Path {
    login?: string
    signup?: string
    index?: string
    info?: string
    profil?: string
}

export interface User extends State {
    id?: string
    username?: string
    createdAt?: string
    updatedAt?: string
}

export interface UserToken {
    token?: string
    refreshToken?: string
}

export interface Req extends User, State {
    token?: string
}

export interface UserData extends User, UserToken {
    admin?: boolean
    picture?: string
    errors?: any
}

export interface StoreData {
    isLogin: boolean
    dataLogin: UserData
    dataToken: UserToken
}

export interface StateToProps {
    persist: StoreData
    temporer: StoreData
}

export interface DispatchToProps {
    setUserDataLogin(args: UserData): UserData
    setUserDataToken(args: UserToken): UserToken
    setIsLogin(args: boolean): boolean
}