import express from "express";
import morgan from "morgan";
import Router from "./routes/employees.routes";

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.json({message: 'Welcome to my app'})
})

app.use("/api/employees", Router)

export { app };