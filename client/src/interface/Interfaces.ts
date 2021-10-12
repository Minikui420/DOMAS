import { RouteComponentProps } from 'react-router-dom'
import { WebStorage } from 'reduxjs-toolkit-persist/es/types'
import { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios'


export interface KKData {
    no_kk?: string
    family_head?: string
    rt_rw?: string
    village?: string
    distric?: string
    city?: string
    zip?: string
    province?: string
}

export interface Error {
    response: any
}

export interface Path {
    path?: string
    activity?: string
}

export interface InitialState extends Path {
    dataToken: UserToken
    dataLogin: UserData
    isLogin: boolean
    kk_data: KKData
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

export interface Checked {
    gender?: string
    isChecked?: boolean
    current?: string
}


export interface State extends Path, Checked {
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
    kk_data: KKData
}

export interface StateToProps {
    persist: StoreData
    temporer: StoreData
}

export interface DispatchToProps {
    setUserDataLogin(args: UserData): UserData
    setUserDataToken(args: UserToken): UserToken
    setKKData(data: KKData): KKData
    setIsLogin(args: boolean): boolean
    setPath(args: string): string
    setActivity(args: string): string
    reset(): any
}