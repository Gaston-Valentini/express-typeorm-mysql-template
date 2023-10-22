import { Request, Response } from "express"

const routeOne = (req:Request, res:Response) => {
    try {
        return res.status(200).json({
            message: "routeOne"
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