// Imports
import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()

import routerRouteOne from "../router/routerRouteOne"
import routerRouteTwo from "../router/routerRouteTwo"

// Settings
app.set("PORT", process.env.PORT || 4000)
app.set("HOST", process.env.HOST)
app.set("DATABASE_PASSWORD", process.env.DATABASE_PASSWORD)

// Router
app.use("/routeOne", routerRouteOne)
app.use("/routeTwo", routerRouteTwo)

// Export
export default app