import express from "express"
import cors from "cors"

import mongoose from "mongoose"

import {serverConfig} from './config'
import todoRoutes from "./api/routes/todo.routes";

const app = express();
app.use(cors());

mongoose.connect(serverConfig.mongoUrl, {
    useNewUrlParser: true,
})
.then(() => {
    console.log("Successfully connected to the database");
})
.catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
})

app.use(express.json())

app.use("/api/", todoRoutes)

// serverConfig.port
app.listen(serverConfig.port, function () {
    console.log("Server is listening on port", serverConfig.port);
});
