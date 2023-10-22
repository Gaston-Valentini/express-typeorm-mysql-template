"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app/app"));
const database_1 = require("./database/database");
// Database
database_1.database.initialize()
    .then(() => {
    console.log("Connected to database");
    // Server
    app_1.default.listen(app_1.default.get("PORT"), () => {
        console.log(`Server listening on port ${app_1.default.get("PORT")}`);
    });
})
    .catch(error => {
    console.log({
        message: "Failed to connect to the database.",
        error
    });
});
