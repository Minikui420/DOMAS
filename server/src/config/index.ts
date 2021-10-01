import { join } from "path"
import { loggerConfig } from "./logger"
import { PORT } from './env/index'
import ormconfig from './ormconfig'
const { version } = require("../../package.json")
export const rootDir = join(__dirname, "..")

export const config: Partial<TsED.Configuration> = {

  version,
  rootDir,
  logger: loggerConfig,

  typeorm: [ormconfig],

  acceptMimes: ["application/json"],
  httpPort: PORT || 8083,
  httpsPort: false, // CHANGE
  mount: {
    "/": [`${rootDir}/controllers/*.{js,ts}`]
  },
  componentsScan: [`${rootDir}/services/*.{js,ts}`],
  exclude: [
    "**/*.spec.ts"
  ]

}
