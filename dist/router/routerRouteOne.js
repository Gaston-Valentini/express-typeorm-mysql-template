"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerRouteOne_1 = require("../controllers/controllerRouteOne");
const router = (0, express_1.Router)();
router.get("/", controllerRouteOne_1.routeOne);
router.get("/:id", controllerRouteOne_1.routeOneById);
exports.default = router;
