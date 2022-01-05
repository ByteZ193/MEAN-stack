import express from "express";
import morgan from "morgan";
import Router from "./routes/employees.routes";
import cors from "cors";

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(cors({origin:"http://localhost:4200"}));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my app" });
});

app.use("/api/employees", Router);

export { app };
