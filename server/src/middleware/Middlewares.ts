import { Middleware, Req, Res } from "@tsed/common"
import { Unauthorized } from "@tsed/exceptions"
import { verify } from "jsonwebtoken"
import { SECRET_KEY } from "src/config/env"
import { UserData } from "src/interface/interfaces"



@Middleware()
export class IsAuth {
    use(@Req() req: Req){
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        verify(token!, SECRET_KEY!, (err, res: UserData) => {
            if(err) {
                const res = new Unauthorized('Invalid token!')
                throw { message: res.message, status: res.status }
            }
            req.body = res
        })
    }
}

@Middleware()
export class SetCookies {
    use(@Res() res: Res){
        res.cookie('userdata', 'HELLO!', { 
            path: '/home',
            secure: true,
            httpOnly: false,
            sameSite: 'strict'
        })
        console.log(res)
    }
}
