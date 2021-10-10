import { 
    setUserDataLogin, setUserDataToken, setIsLogin,
    setPath, reset
} from './hooks' 
import { StateToProps, DispatchToProps, UserData, JWTDecode, DataResponse } from '../interface/Interfaces'
// import Api from '../api/Api'
import Cookies from 'universal-cookie'
import jwtDecode from 'jwt-decode'
import axios, { AxiosInstance } from 'axios'


const url = process.env.REACT_APP_BASE_URL
axios.defaults.withCredentials = true

const axiosInstance: AxiosInstance =  axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json"   
    }
})
axiosInstance.interceptors.request.use(async config => {
    const token = await interceptor()
    if(token || token !== undefined){
        config.headers['Authorization'] = `Bearer ${token}`
        cookies.set('token', token)
        return config
    }
    return config
})

export { axiosInstance }

export const cookies = new Cookies()

export const interceptor = async () => {
    const refreshToken = cookies.get('refreshToken')
    const getToken = cookies.get('token')
    try {
        if(getToken || getToken !== undefined){
            const currentTime = new Date()
            const { exp }: JWTDecode = jwtDecode(getToken)
            if((exp! * 1000) < currentTime.getTime()){
                const dataResponse: DataResponse = await axios.post(`${url}/token`, { refreshToken })
                const { token } = dataResponse.data
                return token
            }
            return getToken
        }
    } catch (error) {
        console.log(`${error}`)
    }
}

export const mapStateToProps = (state: StateToProps) => ({
    persist: state.persist,
    temporer : state.temporer
})

export const mapDispatchToProps = (dispatch: Function): DispatchToProps => {
    return {
        setUserDataLogin: (userData: UserData) => dispatch(setUserDataLogin(userData)),
        setUserDataToken: (userData: UserData) => dispatch(setUserDataToken(userData)),
        setIsLogin: (data: boolean) => dispatch(setIsLogin(data)),
        setPath: (path: string) => dispatch(setPath(path)),
        reset: () => dispatch(reset())
    }
}