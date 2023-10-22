// Imports
import express from "express"
const app = express()

import routerRouteOne from "../router/routerRouteOne"
import routerRouteTwo from "../router/routerRouteTwo"

// Router
app.use("/routeOne", routerRouteOne)
app.use("/routeTwo", routerRouteTwo)

// Export
export default app