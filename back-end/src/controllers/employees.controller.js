const employeeCtrl = {};

employeeCtrl.getEemployees = (req, res) => {
    res.send("Get Employees")
}
employeeCtrl.createEemployee = (req, res) => {
    res.send("Create Employee")
}
employeeCtrl.getEemployee = (req, res) => {
    res.send("Get Employee")
}
employeeCtrl.editEemployee = (req, res) => {
    res.send("Edit Employee")
}
employeeCtrl.deleteEemployee = (req, res) => {
    res.send("Delete Employee")
}

export default employeeCtrl;