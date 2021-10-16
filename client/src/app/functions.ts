import Cookies from 'universal-cookie'
import jwtDecode from 'jwt-decode'
import axios, { AxiosInstance } from 'axios'
import { 
    StateToProps, DispatchToProps, UserData, 
    JWTDecode, DataResponse, KKData 
} from '../interface/Interfaces'
import { 
    setUserDataLogin, setUserDataToken, setIsLogin,
    setPath, setActivity, setKKData, setToResult, reset,
    setLocalPath
} from './hooks' 



const timer: number = (864 * 100000) * 7 // 7 days
export const expires = new Date(new Date().getTime() + timer)
export const cookies = new Cookies()

// COOKIE DECODER

export const cookieDecoder = () => {
    const token = cookies.get(`token`)
    if(token){
        const decode: UserData = jwtDecode(token)
        return decode
    }
}

// AXIOS

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
        cookies.set('token', token, { expires })
        return config
    }
    return config
})

export { axiosInstance }

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

// STATE AND PROPS

export const mapStateToProps = (state: StateToProps) => ({
    persist: state.persist,
    temporer : state.temporer
})

export const mapDispatchToProps = (dispatch: Function): DispatchToProps => {
    return {
        setUserDataLogin: (userData: UserData) => dispatch(setUserDataLogin(userData)),
        setUserDataToken: (userData: UserData) => dispatch(setUserDataToken(userData)),
        setLocalPath: (data: string) => dispatch(setLocalPath(data)),
        setToResult: (data: boolean) => dispatch(setToResult(data)),
        setActivity: (data: string) => dispatch(setActivity(data)),
        setIsLogin: (data: boolean) => dispatch(setIsLogin(data)),
        setKKData: (data: KKData) => dispatch(setKKData(data)),
        setPath: (path: string) => dispatch(setPath(path)),
        reset: () => dispatch(reset())
    }
}