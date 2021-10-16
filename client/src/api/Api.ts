import { axiosInstance } from '../app/functions'
import { Req, KKData } from '../interface/Interfaces'
import { AxiosResponse } from 'axios'


export default class Api {
    
    private req: Req | KKData
    
    constructor(req?: Req | KKData){ 
        this.req = req!
    }

    get = async (path: string) => {
        try {
            switch (path) {
                case '/home':
                    const userInfo: AxiosResponse = await axiosInstance.get(path) 
                    return userInfo.data
                case '/username':
                    const { id } = this.req as Req
                    const response: AxiosResponse = await axiosInstance.get(path, { params: { id } })
                    return response.data
                default:
                    break
            }
        } catch (error) {
            return error
        }
    }
    
    post = async (path: string) => {
        try {
            const response: AxiosResponse = await axiosInstance.post(path, this.req)
            return response.data
        } catch (error) {
            return error
        }
    }
}
