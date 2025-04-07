import { Router } from "express";
import controllerDoctors from "./controllers/controller.doctor.js";
import controllerUsers from "./controllers/controller.users.js";

const router = Router()

// doctors
router.get("/doctors", controllerDoctors.getDoctors)
router.post("/doctors", controllerDoctors.insertDoctor)
router.put("/doctors/:id_doctor", controllerDoctors.updateDoctor)
router.delete("/doctors/:id_doctor", controllerDoctors.deleteDoctor)

// services

// users
router.post("/users/register", controllerUsers.insertUser)
// appointments

export default router