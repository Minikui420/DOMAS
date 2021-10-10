import { RouteComponentProps } from 'react-router-dom'
import { WebStorage } from 'reduxjs-toolkit-persist/es/types'
import { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios'


export interface Path {
    path?: string
}

export interface InitialState extends Path {
    dataToken: UserToken
    dataLogin: UserData
    isLogin: boolean
}

export interface PersistConfig {
    key: string
    storage: WebStorage
}

export interface AxiosType {
    request: AxiosInterceptorManager<AxiosRequestConfig>
    response: AxiosInterceptorManager<AxiosResponse<any>>
}

export interface JWTDecode {
    exp?: number
    iat?: number
}

export interface Props extends StateToProps, DispatchToProps, RouteComponentProps<any> {
 
}

export interface State extends Path {
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
    refreshToken?: string
}

export interface DataResponse {
    data: {
        token?: string
        refreshToken?: string
    }
}

export interface UserData extends User, UserToken, JWTDecode {
    isAdmin?: boolean
    picture?: string
    errors?: any
}

export interface StoreData extends Path {
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
    setPath(args: string): string
    reset(): any
}