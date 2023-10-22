"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const app_1 = __importDefault(require("../app/app"));
const Example_1 = require("../entities/Example");
exports.database = new typeorm_1.DataSource({
    type: "mysql",
    host: app_1.default.get("HOST"),
    port: 3306,
    username: "root",
    password: app_1.default.get("DATABASE_PASSWORD"),
    database: "test",
    entities: [Example_1.Example],
    migrations: [],
    logging: false,
    synchronize: true
});
