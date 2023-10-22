import "reflect-metadata"
import { DataSource } from "typeorm"

import app from "../app/app"

export const database = new DataSource({
    type: "mysql",
    host: app.get("HOST"),
    port: 3306,
    username: "root",
    password: app.get("DATABASE_PASSWORD"),
    database: "test",
    entities: [],
    migrations: [],
    logging: false,
    synchronize: true
})