import { query } from "../database/sqlite.js"

async function insertAppointment(appointmentData) {
    const sqlQuery = `
        INSERT INTO appointments(
            id_user,
            id_doctor,
            id_service,
            booking_date,
            booking_hour)
        VALUES (?, ?, ?, ?, ?) 
        RETURNING *
    `

    const appointment = await query(sqlQuery, appointmentData)
    return appointment[0]
}

async function getUserAppointments(idUser) {
    const sqlQuery = `
    SELECT
    appoint.id_appointment,
    serv.description,
    doct.name AS doctor,
    doct.specialty,
    appoint.booking_date,
    appoint.booking_hour,
    usr.name AS user,
    doctser.price
    FROM appointments AS appoint 
    left JOIN services AS serv ON(serv.id_services = appoint.id_service)
    left JOIN doctors AS doct ON (doct.id_doctor = appoint.id_doctor)
    left JOIN users AS usr ON (usr.id_user = appoint.id_user)
    left JOIN doctors_services AS doctser ON (doctser.id_doctor = appoint.id_doctor AND doctser.id_service = appoint.id_service)
    WHERE appoint.id_user = ?
    ORDER BY appoint.booking_date, appoint.booking_hour
`
    const appointments = await query(sqlQuery, [idUser])
    return appointments
}

async function deleteAppointment(idUser, id_appointment) {
    const sqlQuery = `
        DELETE FROM appointments 
        WHERE id_appointment = ? 
        AND id_user = ?
    `

    const deleteAppointment = query(sqlQuery, [id_appointment, idUser])

    return id_appointment
}

async function getAdminAppointments(dt_Start, dt_End, id_doctor) {

    let whereConditions = []
    let values = []

    if (dt_Start) {
        whereConditions.push("appoint.booking_date >= ?");
        values.push(dt_Start);
    }

    if (dt_End) {
        whereConditions.push("appoint.booking_date <= ?");
        values.push(dt_End);
    }

    if (id_doctor) {
        whereConditions.push("appoint.id_doctor = ?");
        values.push(id_doctor);
    }

    const whereClause = whereConditions.length ? "WHERE " + whereConditions.join(" AND ") : "";

    const sqlQuery = `
    SELECT
    appoint.id_appointment,
    serv.description,
    doct.name AS doctor,
    doct.specialty,
    appoint.booking_date,
    appoint.booking_hour,
    usr.name AS user,
    doctser.price
    FROM appointments AS appoint 
    left JOIN services AS serv ON(serv.id_services = appoint.id_service)
    left JOIN doctors AS doct ON (doct.id_doctor = appoint.id_doctor)
    left JOIN users AS usr ON (usr.id_user = appoint.id_user)
    left JOIN doctors_services AS doctser ON (doctser.id_doctor = appoint.id_doctor AND doctser.id_service = appoint.id_service)
    ${whereClause}
    ORDER BY appoint.booking_date DESC, appoint.booking_hour DESC
`
    const appointments = await query(sqlQuery, values)
    return appointments
}

export default {
    getUserAppointments,
    insertAppointment,
    deleteAppointment,
    getAdminAppointments
}