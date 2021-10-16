import { Configuration, Inject } from "@tsed/di"
import { PlatformApplication } from "@tsed/common"
import { config } from "./config"
import methodOverride from "method-override"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import compress from "compression"
import session from "express-session"
import cors from "cors"
import "@tsed/platform-express" // /!\ keep this import
import "@tsed/typeorm"
import "@tsed/ajv"




@Configuration(config)

export class Server {

  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;

  $beforeRoutesInit(): void {
    this.app
      .use(cors({ 
        origin: true,
        credentials: true,
        allowedHeaders: [
          'sessioId', 'Content-Type',
          'X-Requested-With', 'Authorization', 'Accept', 'Data'
        ],
        exposedHeaders: ['*']
      }))
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }))
      .use(session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true, sameSite: 'strict' }
      }))
  }

}
