import { Router } from "express";
import controllerDoctors from "./controllers/controller.doctor.js";

const router = Router()

// doctors
router.get("/doctors", controllerDoctors.getDoctors)
router.post("/doctors", controllerDoctors.insertDoctor)
router.put("/doctors/:id_doctor", controllerDoctors.updateDoctor)
router.delete("/doctors/:id_doctor", controllerDoctors.deleteDoctor)

// services

// users

// appointments

export default router