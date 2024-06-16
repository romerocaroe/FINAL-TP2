import express from "express";
import Router from "./src/routes/products.routes.js";

const app = express();

app.use(express.json()); //traer info del req.body
app.use(express.urlencoded({ extended: true })); //req.params

app.use("/", new Router().start());

app.listen(process.env.PORT, () => console.log(`Server listening on: ${process.env.PORT}`));
app.on("error", (error) => console.log(`ERROR: ${error}`));
