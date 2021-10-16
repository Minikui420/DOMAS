import {
    Controller, BodyParams,
    Post, UseBefore
} from "@tsed/common"
import { Status } from "@tsed/schema"
import { IsAuth } from "src/middleware/Middlewares"
import { ResidentDetail } from '../entity/ResidentDetail'
import { ResidentDetailService } from '../services/ResidentDetailService'


@Controller('/detail')
export class Member {

    constructor(private residentDetailService: ResidentDetailService) {}

    @Post('/add')
    @Status(201)
    @UseBefore(IsAuth)
    add(@BodyParams() redidentDetail: ResidentDetail): Promise<ResidentDetail> {
        return this.residentDetailService.createResidentDetail(redidentDetail)
    }

}
