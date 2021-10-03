import { ConnectionOptions, createConnections } from 'typeorm'
import {
    DB_NAME, DB_USER, DB_PASSWORD,
    DB_HOST, DB_PORT
} from './env/index'

// import { rootDir } from './index'


const ormconfig: ConnectionOptions = {

    name: "default",
    type: "postgres",
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT as unknown as number,
    logging: true,
    synchronize: true,

    entities: [`src/entity/*.{ts,js}`], // `${rootDir}/entity/*.{ts,js}`
    migrations: [`src/migrations/*.{ts,js}`],
    subscribers: [`src/subscriber/*.{ts,js}`],

    cli: {
        entitiesDir: `src/entity`,
        migrationsDir: `src/migrations`
    }

}

export const connection = createConnections([ormconfig])

export default ormconfig