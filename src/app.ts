import express from "express"
import router from "./routes/routes"
import cors from "cors"


function createApp() {

    const app = express()

    const corsOptions = {
        origin: 'http://127.0.0.1:5500/',
        methods: 'GET, DELETE'
    }
    app.use(cors(corsOptions))

    app.use(express.json())
    app.use("/api", router)

    return app
}

export default createApp;



