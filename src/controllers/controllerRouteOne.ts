import { Request, Response } from "express"

import { Example } from "../entities/Example"

const routeOne = async (req:Request, res:Response) => {
    try {
        const data = await Example.find()
        return res.status(200).json({
            message: "routeOne",
            data
        })
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}

const routeOneById = (req:Request, res:Response) => {
    try {
        return res.status(200).json({
            message: `routeOne ${req.params.id}`
        })
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}

export {
    routeOne,
    routeOneById
}