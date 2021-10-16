import { RouteComponentProps } from 'react-router-dom'
import { WebStorage } from 'reduxjs-toolkit-persist/es/types'
import { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios'


export interface Search {
    data?: string
    search?: string
}

export interface KKData {
    id?: string
    no_kk?: string
    family_head?: string
    rt?: string
    rw?: string
    village?: string
    districts?: string
    city?: string
    zip?: string
    province?: string
}

export interface KTPData {
    id?: string // id kk
    nik?: string
    name?: string
    birthPlace?: string
    date?: Date
    gender?: string
    bloodType?: string
    address?: string
    rt?: string
    rw?: string
    districts?: string
    village?: string
    religion?: string
    maritalStastus?: string
    profession?: string
    citizenship?: string
    validUntil?: string
    //addtional
    education?: string
    professionType?: string
    statusInFamily?: string
    no_passpor?: string
    no_kitas_kitap?: string
    fatherName?: string
    motherName?: string
}

export interface DefaultInput {
    defaultKK?: KKData
    defaultKTP?: KTPData
} 

export interface Error {
    response: any
}

export interface Path {
    path?: string
    localPath?: string
    activity?: string
    toResult?: boolean
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

export interface UserData extends User, UserToken, Search, JWTDecode {
    isAdmin?: boolean
    picture?: string
    errors?: any
}

export interface StoreData extends Path {
    localPath?: string
    isLogin?: boolean
    dataLogin?: UserData
    dataToken?: UserToken
    kk_data?: KKData
}

export interface StateToProps {
    persist: StoreData
    temporer: StoreData
}

export interface DispatchToProps {
    setUserDataLogin(args: UserData): UserData
    setUserDataToken(args: UserToken): UserToken
    setToResult(args: boolean): boolean
    setLocalPath(data: string): string
    setIsLogin(args: boolean): boolean
    setActivity(args: string): string
    setKKData(data: KKData): KKData
    setPath(args: string): string
    reset(): any
}