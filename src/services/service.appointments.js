import repositoryAppointments from "../repositories/repository.appointments.js"

async function insertAppointment(idUser, id_doctor, id_service, booking_date, booking_hour){
    const appointmentData = [idUser, id_doctor, id_service, booking_date, booking_hour]
    
    const appointments = await repositoryAppointments.insertAppointment(appointmentData)
    return appointments
}

async function getUserAppointments(idUser) {
    const userAppointment = await repositoryAppointments.getUserAppointments(idUser)
    return userAppointment
}

export default {
    getUserAppointments,
    insertAppointment
}