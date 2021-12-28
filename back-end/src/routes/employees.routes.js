import { Router } from "express";
import employeeCtrl from "../controllers/employees.controller";
import EmployeeCtrl from "../controllers/employees.controller";

const router = Router();

router.get("/", employeeCtrl.getEemployees);
router.post("/", employeeCtrl.createEemployee);
router.get("/:id", employeeCtrl.getEemployee);
router.put("/:id", employeeCtrl.editEemployee);
router.delete("/:id", employeeCtrl.deleteEemployee);

export default router;
