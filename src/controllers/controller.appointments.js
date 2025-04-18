import serviceAppointments from "../services/service.appointments.js"

async function insertAppointment(req, res) {

    const { idUser } = req // vem da injecao do req.idUser do validate token
    const { id_doctor, id_service, booking_date, booking_hour } = req.body

    const appointments = await serviceAppointments.insertAppointment(idUser, id_doctor, id_service, booking_date, booking_hour)
    res.status(201).json(appointments)
}

async function getUserAppointments(req, res) {
    const { idUser } = req // vem da injecao do req.idUser do validate token

    const appointments = await serviceAppointments.getUserAppointments(idUser)
    res.status(200).json(appointments)
}

async function deleteAppointment(req, res) {
    const { idUser } = req
    const { id_appointment } = req.params

    const deleteAppointment = await serviceAppointments.deleteAppointment(idUser, id_appointment)
    res.status(200).json(deleteAppointment)
}

export default {
    getUserAppointments,
    insertAppointment,
    deleteAppointment
}