import { query } from "./database/sqlite.js"; // esta aqui so para testes rapidos

import { Router } from "express";
import middlewareToken from "./middlewares/middleware.token.js";

import controllerDoctors from "./controllers/controller.doctor.js";
import controllerUsers from "./controllers/controller.users.js";
import controllerAppointments from "./controllers/controller.appointments.js";

const router = Router()

// doctors
router.get("/doctors", middlewareToken.validateToken, controllerDoctors.getDoctors)
router.post("/doctors", controllerDoctors.insertDoctor)
router.put("/doctors/:id_doctor", controllerDoctors.updateDoctor)
router.delete("/doctors/:id_doctor", controllerDoctors.deleteDoctor)

// services
router.get("/doctors/:id_doctor/service", middlewareToken.validateToken, controllerDoctors.getServices)

// users
router.post("/users/register", controllerUsers.insertUser)
router.post("/users/login", controllerUsers.getUser)
router.get("/users/profile", middlewareToken.validateToken, controllerUsers.getProfile)
router.get("/users/getAll", middlewareToken.validateToken, controllerUsers.getAllUsers)


// users admin
router.post("/admin/register", controllerUsers.insertUserAdmin)
router.post("/admin/login", controllerUsers.getUserAdmin)

// appointments
router.get("/appointments", middlewareToken.validateToken, controllerAppointments.getUserAppointments)
router.get("/appointments/:id_appointment", middlewareToken.validateToken, controllerAppointments.getSelectedAppointment)
router.post("/appointments", middlewareToken.validateToken, controllerAppointments.insertAppointment)
router.delete("/appointments/:id_appointment", middlewareToken.validateToken, controllerAppointments.deleteAppointment)

// appointments admin role
router.get("/admin/appointments", middlewareToken.validateToken, controllerAppointments.getAdminAppointments)

export default router