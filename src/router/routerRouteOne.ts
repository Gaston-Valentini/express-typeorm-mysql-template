import { Router } from "express"

import { routeOne, routeOneById } from "../controllers/controllerRouteOne"

const router = Router()

router.get("/", routeOne)
router.get("/:id", routeOneById)

export default router