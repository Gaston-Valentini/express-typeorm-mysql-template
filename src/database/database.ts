import "reflect-metadata"
import { DataSource } from "typeorm"

import app from "../app/app"
import { Example } from "../entities/Example"

export const database = new DataSource({
    type: "mysql",
    host: app.get("HOST"),
    port: 3306,
    username: "root",
    password: app.get("DATABASE_PASSWORD"),
    database: "test",
    entities: [Example],
    migrations: [],
    logging: false,
    synchronize: true
})