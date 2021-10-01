import {
  Controller, UseBefore, BodyParams,
  Delete, Post, Get, Put, QueryParams
} from "@tsed/common"
import { UserService } from '../services/UserService'
import { Status } from "@tsed/schema"
import { Users } from '../entity/Users'
import { Token } from '../interface/interfaces'
import { IsAuth } from '../middleware/IsAuth'


@Controller('/')
export class User {

  constructor(private userService: UserService) {

  }

  @Post('/login')
  login(@BodyParams() data: Users): Promise<Users> {
    return this.userService.getUser(data)
  }

  @Get('/user')
  @UseBefore(IsAuth)
  token(@QueryParams() token: Token): Promise<Token> {
    return this.userService.isValidUser(token)
  }

  @Post('/token')
  @Status(201)
  refresh(@BodyParams() token: Token){
    return this.userService.refreshToken(token)
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
