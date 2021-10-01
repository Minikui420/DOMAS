export const config = require("dotenv").config()

export const {
    NODE_ENV, PORT,
    DB_NAME, DB_USER,
    DB_PASSWORD, DB_HOST, DB_PORT,
    SECRET_KEY, REFRESH_SECRET_KEY

} = process.env

export const isProduction = NODE_ENV === "production"
