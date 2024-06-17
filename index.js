import express from "express";
import router from "./src/routes/harvard.routes.js";

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

//el process.env.PORT no funciona
app.listen(8080, () => console.log(`Server listening on: ${process.env.PORT}`));
app.on("error", (error) => console.log(`ERROR: ${error}`));
