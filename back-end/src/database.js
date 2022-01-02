import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/mean-employees",{
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then((db) => console.log("DataBase connected"))
  .catch((err) => console.error(err));
