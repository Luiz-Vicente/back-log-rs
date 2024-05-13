import { config } from "dotenv"
config()
import { AppDataSource } from "./data-source"
const express = require("express");

AppDataSource.initialize().then(async () => {
    const app = express();

    // Add your routes and middleware here

    const port = process.env.BACK_PORT;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(error => console.log(error))
