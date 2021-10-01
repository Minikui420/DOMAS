import { Injectable } from '@tsed/common'
import { Users } from '../entity/Users'
import { ClientRequest } from '../decorators/decorators'
import { Token } from 'src/interface/interfaces'



@Injectable()
export class UserService {

    @ClientRequest()
    async create(users: Users): Promise<Users> {
        return users
    }

    @ClientRequest()
    async getUser(users: Users): Promise<Users> {
        return users
    }

    @ClientRequest()
    async isValidUser(token: Token): Promise<Token> {
        return token
    }

    @ClientRequest()
    async refreshToken(token: Token): Promise<Token> {
        return token
    }

}

