import serviceAppointments from "../services/service.appointments.js"

async function insertAppointment(req, res) {

    const { idUser } = req // vem da injecao do req.idUser do validate token
    const {id_user, id_doctor, id_service, booking_date, booking_hour } = req.body
    const appointments = await serviceAppointments.insertAppointment(idUser, id_user, id_doctor, id_service, booking_date, booking_hour)
    res.status(201).json(appointments)
}

async function getUserAppointments(req, res) {
    const { idUser } = req // vem da injecao do req.idUser do validate token
    console.log(idUser)

    const appointments = await serviceAppointments.getUserAppointments(idUser)
    res.status(200).json(appointments)
}

async function getSelectedAppointment(req, res) {
    const { id_appointment } = req.params

    const appointment = await serviceAppointments.getSelectedAppointment(id_appointment)
    res.status(200).json(appointment)
}

async function editAppointment(req, res){
    const {id_appointment} = req.params
    const {id_user, id_doctor, id_services, booking_date, booking_hour} = req.body

    console.log(id_appointment, id_user, id_doctor, id_services, booking_date, booking_hour)

    const updateAppointment = await serviceAppointments.editAppointment(id_appointment, id_user, id_doctor, id_services, booking_date, booking_hour)

    res.status(202).json(updateAppointment)

}

async function deleteAppointment(req, res) {
    const { idUser } = req.params
    const { id_appointment } = req.params

    console.log(idUser, id_appointment, "chamei delete")

    const deleteAppointment = await serviceAppointments.deleteAppointment(idUser, id_appointment)
    res.status(200).json(deleteAppointment)
}

async function getAdminAppointments(req, res) {
    const {dt_Start, dt_End, id_doctor} = req.query

    const appointments = await serviceAppointments.getAdminAppointments(dt_Start, dt_End, id_doctor)
    res.status(200).json(appointments)
}
export default {
    insertAppointment,
    getUserAppointments,
    getSelectedAppointment,
    editAppointment,
    deleteAppointment,
    getAdminAppointments
}