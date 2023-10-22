"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeTwoById = exports.routeTwo = void 0;
const routeTwo = (req, res) => {
    try {
        return res.status(200).json({
            message: "routeTwo"
        });
    }
    catch (error) {
        return res.status(400).json({
            error
        });
    }
};
exports.routeTwo = routeTwo;
const routeTwoById = (req, res) => {
    try {
        return res.status(200).json({
            message: `routeTwo ${req.params.id}`
        });
    }
    catch (error) {
        return res.status(400).json({
            error
        });
    }
};
exports.routeTwoById = routeTwoById;
