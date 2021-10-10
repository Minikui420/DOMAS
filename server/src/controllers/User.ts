import {
  Controller, UseBefore, BodyParams, Res, Req,
  Delete, Post, Get, Put, QueryParams, UseAfter
} from "@tsed/common"
import { UserService } from '../services/UserService'
import { Status } from "@tsed/schema"
import { Users } from '../entity/Users'
import { Token } from '../interface/interfaces'
import { IsAuth, SetCookies } from '../middleware/Middlewares'
import { refreshToken } from "src/functions/functions"


@Controller('/')
export class User {

  constructor(private userService: UserService) {

  }

  @Post('/login')
  @UseAfter(SetCookies)
  login(@BodyParams() data: Users): Promise<Users> {
    return this.userService.getUser(data)
  }

  @Get('/home')
  @UseBefore(IsAuth)
  home(@Req() req: Req) {
    return req.body
  }

  @Post('/token')
  @Status(201)
  refresh(@BodyParams() refreshToken: Token){
    return this.userService.refreshToken(refreshToken)
  }

  @Post('/signup')
  @Status(201)
  signup(@BodyParams() data: Users): Promise<Users> {
    return this.userService.create(data)
  }

  @Put('/edit')
  edit() {
    
  }

  @Delete('/delete')
  delete() {

  }

}
