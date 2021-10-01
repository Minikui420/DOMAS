import { Injectable } from '@tsed/common'
import { Resident } from '../entity/Resident'
import { ClientRequest } from '../decorators/decorators'



@Injectable()
export class ResidentService {

    @ClientRequest()
    async createResident(resident: Resident): Promise<Resident> {
        return resident
    }

    @ClientRequest()
    async getResident(resident: Resident): Promise<Resident> {
        return resident
    }

    @ClientRequest()
    async editResident(resident: Resident): Promise<Resident> {
        return resident
    }

}

