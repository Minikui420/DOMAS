import { Configuration, Inject } from "@tsed/di"
import { PlatformApplication } from "@tsed/common"
import { config } from "./config"
import bodyParser from "body-parser"
import compress from "compression"
import cookieParser from "cookie-parser"
import session from "express-session"
import methodOverride from "method-override"
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
        credentials: true,
        origin: 'http://localhost:3000',
        allowedHeaders: ['Content-Type', 'X-Requested-With']
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
        cookie: { secure: false, sameSite: 'lax' }
      }))
  }

}
