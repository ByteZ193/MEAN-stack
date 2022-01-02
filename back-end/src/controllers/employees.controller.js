import Employee from "../models/Employees";

const employeeCtrl = {};

employeeCtrl.getEemployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};
employeeCtrl.createEemployee = async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();

  res.send({ message: "Employee created" });
};
employeeCtrl.getEemployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  res.send(employee);
};
employeeCtrl.editEemployee = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);

  res.json({ status: "Employee Updated" });
};
employeeCtrl.deleteEemployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);

  res.json({ status: "Employee Deleted" });
};

export default employeeCtrl;
