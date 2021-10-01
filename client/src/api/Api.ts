import axios from 'axios'
import { Req } from '../interface/Interfaces'

export default class Api {
    
    private req: Req
    private api = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
            "Conttent-Type": "application/json"
        }
    })

    constructor(req: Req){ 
        this.req = req
    }

    get = async (path: string) => {
        try {

            const { id, token } = this.req

            switch (path) {
                case '/user':
                    const user = await this.api.get(path, { headers: { 'Authorization': `Bearer ${token}` } })
                    return user.data

                case '/login':
                    const response = await this.api.get(path, { params: { id } })
                    return response.data
            
                default:
                    break
            }

        } catch (error) {
            return error.response.data
        }
    }
    
    post = async (path: string) => {
        try {
            const response = await this.api.post(path, this.req)
            return response.data
        } catch (error) {
            return error.response.data
        }
    }
}