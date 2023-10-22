"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const routerRouteOne_1 = __importDefault(require("../router/routerRouteOne"));
const routerRouteTwo_1 = __importDefault(require("../router/routerRouteTwo"));
// Settings
app.set("PORT", process.env.PORT || 4000);
app.set("HOST", process.env.HOST);
app.set("DATABASE_PASSWORD", process.env.DATABASE_PASSWORD);
// Router
app.use("/routeOne", routerRouteOne_1.default);
app.use("/routeTwo", routerRouteTwo_1.default);
// Export
exports.default = app;
