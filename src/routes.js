import { Router } from "express";
import controllerDoctors from "./controllers/controller.doctor.js";

const router = Router()

router.get("/doctors", controllerDoctors.getDoctors)

export default router