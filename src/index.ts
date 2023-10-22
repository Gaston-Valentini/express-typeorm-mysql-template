import app from "./app/app"
import { database } from "./database/database"

// Database
database.initialize()
.then(() => {
    console.log("Connected to database");
    
    // Server
    app.listen(app.get("PORT"), () => {
        console.log(`Server listening on port ${app.get("PORT")}`);
    })
})
.catch(error => {
    console.log({
        message: "Failed to connect to the database.",
        error
    })
})