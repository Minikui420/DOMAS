import {
    Controller, BodyParams, QueryParams,
    Delete, Post, Put, Get, UseBefore
} from "@tsed/common"
import { Status } from "@tsed/schema"
import { IsAuth } from "src/middleware/Middlewares"
import { FamilyCard } from '../entity/FamilyCard'
import { FamilyService } from '../services/FamilyService'


@Controller('/family')
export class Family {

    constructor(private familyService: FamilyService) {}

    @Get()
    get(@QueryParams() data: FamilyCard): Promise<FamilyCard> {
        return this.familyService.getFamily(data)
    }

    @Post('/add')
    @Status(201)
    @UseBefore(IsAuth)
    add(@BodyParams() data: FamilyCard): Promise<FamilyCard> {
        return this.familyService.createFamily(data)
    }

    @Put('/edit')
    edit(@QueryParams() data: FamilyCard, @BodyParams() params: FamilyCard): Promise<FamilyCard> {
        const { id } = data
        params.id = id!
        return this.familyService.editFamily(params)
    }

    @Delete('/delete')
    delete() {
        
    }

}
