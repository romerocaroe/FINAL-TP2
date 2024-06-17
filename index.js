import express from "express";
import mongoose from "mongoose";
require('./db')
import Router from "./src/routes/harvard.routes.js";
import gallery from "./src/controllers/gallery.controller.js"

const app = express();

app.use(express.json()); //traer info del req.body
app.use(express.urlencoded({ extended: true })); //req.params

app.use("/", new Router().start());
app.use('/api', gallery);
//await mongoose.connect('mongodb://127.0.0.1/test');

app.listen(process.env.PORT, () => console.log(`Server listening on: ${process.env.PORT}`));
app.on("error", (error) => console.log(`ERROR: ${error}`));
