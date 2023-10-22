"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const routerRouteOne_1 = __importDefault(require("../router/routerRouteOne"));
const routerRouteTwo_1 = __importDefault(require("../router/routerRouteTwo"));
// Router
app.use("/routeOne", routerRouteOne_1.default);
app.use("/routeTwo", routerRouteTwo_1.default);
// Export
exports.default = app;
