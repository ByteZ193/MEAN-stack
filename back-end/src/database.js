import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/mean-employees", {})
  .then((db) => console.log("DataBase connected"))
  .catch((err) => console.error(err));
