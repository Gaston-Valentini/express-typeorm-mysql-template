"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerRouteTwo_1 = require("../controllers/controllerRouteTwo");
const router = (0, express_1.Router)();
router.get("/", controllerRouteTwo_1.routeTwo);
router.get("/:id", controllerRouteTwo_1.routeTwoById);
exports.default = router;
