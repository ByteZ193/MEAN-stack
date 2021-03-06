import { Schema, model } from "mongoose";

const employeesSchema = new Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Employees", employeesSchema);
