import { Request, Response } from "express"

const routeTwo = (req:Request, res:Response) => {
    try {
        return res.status(200).json({
            message: "routeTwo"
        })
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}

const routeTwoById = (req:Request, res:Response) => {
    try {
        return res.status(200).json({
            message: `routeTwo ${req.params.id}`
        })
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}

export {
    routeTwo,
    routeTwoById
}