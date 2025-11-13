import express from "express"
import router from "./routes/routes"
import cors from "cors"


function createApp() {

    const app = express()

    const corsOptions = {
        origin: 'http://localhost:3000',
        methods: 'GET, DELETE, POST, PUT, PATCH',
    }
    app.use(cors(corsOptions))

    app.use(express.json())
    app.use("/api", router)

    return app
}

export default createApp;



