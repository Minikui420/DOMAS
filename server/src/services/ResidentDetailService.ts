import { Injectable } from '@tsed/common'
import { ResidentDetail } from '../entity/ResidentDetail'
import { ClientRequest } from '../decorators/decorators'



@Injectable()
export class ResidentDetailService {

    @ClientRequest()
    async createResidentDetail(residentDetail: ResidentDetail): Promise<ResidentDetail> {
        return residentDetail
    }

    @ClientRequest()
    async getResidentDetail(residentDetail: ResidentDetail): Promise<ResidentDetail> {
        return residentDetail
    }

    @ClientRequest()
    async editResidentDetail(residentDetail: ResidentDetail): Promise<ResidentDetail> {
        return residentDetail
    }

}

