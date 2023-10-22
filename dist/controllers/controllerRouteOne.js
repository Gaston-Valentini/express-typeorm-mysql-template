"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeOneById = exports.routeOne = void 0;
const Example_1 = require("../entities/Example");
const routeOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Example_1.Example.find();
        return res.status(200).json({
            message: "routeOne",
            data
        });
    }
    catch (error) {
        return res.status(400).json({
            error
        });
    }
});
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
