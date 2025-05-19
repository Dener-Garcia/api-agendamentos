import repositoryAppointments from "../repositories/repository.appointments.js"

async function insertAppointment(idUser, id_user, id_doctor, id_service, booking_date, booking_hour){
    
    // verifica se o apontamento foi criado pelo painel administrativo web da clinica.
    if(id_user !== undefined){
        idUser = id_user
    } 

    const appointmentData = [idUser, id_doctor, id_service, booking_date, booking_hour]

    const appointments = await repositoryAppointments.insertAppointment(appointmentData)
    return appointments
}

async function getUserAppointments(idUser) {
    const userAppointment = await repositoryAppointments.getUserAppointments(idUser)
    return userAppointment
}

async function getSelectedAppointment(id_appointment) {
    const userAppointment = await repositoryAppointments.getSelectedAppointment(id_appointment)
    return userAppointment
}

async function editAppointment(id_appointment, id_user, id_doctor, id_services, booking_date, booking_hour) {
    const updateAppointment = await repositoryAppointments.editAppointment(id_appointment, id_user, id_doctor, id_services, booking_date, booking_hour)
    return updateAppointment
}

async function deleteAppointment(idUser, id_appointment) {
    const deleteAppointment = await repositoryAppointments.deleteAppointment(idUser, id_appointment)
    return deleteAppointment
}

async function getAdminAppointments(dt_Start, dt_End, id_doctor) {
    const userAppointment = await repositoryAppointments.getAdminAppointments(dt_Start, dt_End, id_doctor)
    return userAppointment
}

export default {
    getUserAppointments,
    getSelectedAppointment,
    insertAppointment,
    editAppointment,
    deleteAppointment,
    getAdminAppointments
}