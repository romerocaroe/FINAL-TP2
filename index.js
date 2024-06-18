import express from "express";
import 'dotenv/config'
import router from "./src/routes/harvard.routes.js";

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(process.env.PORT, () => console.log(`Server listening on: ${process.env.PORT}`));
app.on("error", (error) => console.log(`ERROR: ${error}`));
