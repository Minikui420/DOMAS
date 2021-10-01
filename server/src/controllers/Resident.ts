import {
    Controller, BodyParams, QueryParams,
    Delete, Post, Put, Get
} from "@tsed/common"
import { ResidentService } from '../services/ResidentService'
import { Status } from "@tsed/schema"
import { Resident } from '../entity/Resident'
import { Result } from "src/interface/interfaces"


@Controller('/resident')
export class Residents {

    constructor(private residentService: ResidentService) {}

    @Get()
    get(@QueryParams() data: Resident): Promise<Resident> {
        return this.residentService.getResident(data)
    }

    @Post('/add')
    @Status(201)
    add(@BodyParams() data: Resident): Promise<Resident> {
        return this.residentService.createResident(data)
    }

    @Put('/edit')
    edit(@QueryParams() data: Result, @BodyParams() params: Resident): Promise<Resident> {
        const { id } = data
        params.uuid = id
        return this.residentService.editResident(params)
    }

    @Delete('/delete')
    delete() {

    }

}
