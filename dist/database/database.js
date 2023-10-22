"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const app_1 = __importDefault(require("../app/app"));
exports.database = new typeorm_1.DataSource({
    type: "mysql",
    host: app_1.default.get("HOST"),
    port: 3306,
    username: "root",
    password: app_1.default.get("DATABASE_PASSWORD"),
    database: "test",
    entities: [],
    migrations: [],
    logging: false,
    synchronize: true
});