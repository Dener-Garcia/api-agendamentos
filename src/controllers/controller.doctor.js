import serviceDoctors from '../services/service.doctors.js'

async function getDoctors(req, res) {
// request com get sempre vem de query paramas
    const { name } = req.query

    const doctors = await serviceDoctors.getDoctors(name)

    res.status(200).json(doctors)
}

async function insertDoctor(req, res) {

    const { name, specialty, icon } = req.body

    const doctor = await serviceDoctors.insertDoctor(name, specialty, icon)
    res.status(201).json(doctor)
}

async function updateDoctor(req, res) {
    // request para update vem com url params de ID definido na rota/:nomeParam, e o restante dos dados vem do body

    const idDoctor = req.params.id_doctor
    const { name, specialty, icon } = req.body

    const doctor = await serviceDoctors.updateDoctor(idDoctor, name, specialty, icon)

    res.status(200).json(doctor)
}

async function deleteDoctor(req, res) {
    // request para delete vem com url params de ID definido na rota/:nomeParam

    const idDoctor = req.params.id_doctor

    const doctor = await serviceDoctors.deleteDoctor(idDoctor)

    res.status(202).json(doctor)
}

export default {
    getDoctors,
    insertDoctor,
    updateDoctor,
    deleteDoctor
}