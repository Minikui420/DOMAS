import { Middleware, Req } from "@tsed/common"
import { Unauthorized } from "@tsed/exceptions"
import { verify } from "jsonwebtoken"
import { SECRET_KEY } from "src/config/env"
import { Token } from "src/interface/interfaces"


@Middleware()
export class IsAuth {
    use(@Req() req: Req){
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        verify(token!, SECRET_KEY!, (err, res: Token) => {
            if(err) {
                const res = new Unauthorized('Invalid token!')
                throw { message: res.message, status: res.status }
            }
            req.query.id = res.id
        })
    }
}