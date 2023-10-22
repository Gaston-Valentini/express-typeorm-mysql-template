"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeOneById = exports.routeOne = void 0;
const routeOne = (req, res) => {
    try {
        return res.status(200).json({
            message: "routeOne"
        });
    }
    catch (error) {
        return res.status(400).json({
            error
        });
    }
};
exports.routeOne = routeOne;
const routeOneById = (req, res) => {
    try {
        return res.status(200).json({
            message: `routeOne ${req.params.id}`
        });
    }
    catch (error) {
        return res.status(400).json({
            error
        });
    }
};
exports.routeOneById = routeOneById;
