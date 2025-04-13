import { query } from '../database/sqlite.js'

async function getDoctors(name) {

    let sqlQuery
    let filter = []

    if (name) {
        sqlQuery = `
            SELECT * FROM doctors 
            WHERE name LIKE ?
            ORDER BY name
    `
        filter.push('%' + name + '%')
    } else {
        sqlQuery = `
            SELECT * FROM doctors 
            ORDER BY name
    `
    }

    const doctors = await query(sqlQuery, filter)

    return doctors
}

async function insertDoctor(doctorData) {

    let sqlQuery = `
        INSERT INTO doctors(name, specialty, icon) VALUES (?, ?, ?)
        RETURNING id_doctor, name
    `

    const doctor = await query(sqlQuery, doctorData)

    return doctor[0]
}

async function updateDoctor(doctorData) {

    let sqlQuery = `
    UPDATE doctors
    SET name = ?, specialty = ?, icon = ?
    WHERE id_doctor = ?
    `

    const doctor = await query(sqlQuery, doctorData)

    return { doctorData }
}

async function deleteDoctor(id_doctor) {

    let sqlQuery = `
    DELETE FROM doctors
    WHERE id_doctor = ?
    `

    const doctor = await query(sqlQuery, [id_doctor])

    return { id_doctor }
}

async function getServices(idDoctor) {

    let sqlQuery = `
        SELECT 
        docServ.id_service, 
        serv.description, 
        docServ.price
        FROM doctors_services AS docServ
        INNER JOIN services AS serv ON (serv.id_services = docServ.id_service)
        WHERE id_doctor = ?
        ORDER BY serv.description
    `

    const services = query(sqlQuery, [idDoctor])

    return services
    
}

export default {
    getDoctors,
    insertDoctor,
    updateDoctor,
    deleteDoctor,

    getServices
}