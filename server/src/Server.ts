import { Configuration, Inject } from "@tsed/di"
import { PlatformApplication } from "@tsed/common"
import { config } from "./config"
import bodyParser from "body-parser"
import compress from "compression"
import cookieParser from "cookie-parser"
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
      .use(cors())
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }));
  }

}
