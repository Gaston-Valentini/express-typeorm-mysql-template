import { Router } from "express"

import { routeTwo, routeTwoById } from "../controllers/controllerRouteTwo"

const router = Router()

router.get("/", routeTwo)
router.get("/:id", routeTwoById)

export default router