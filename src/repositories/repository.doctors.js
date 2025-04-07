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

    const doctors = query(sqlQuery, filter)
    
    return doctors
}

async function insertDoctor(doctorData) {
 
    let sqlQuery = `
        INSERT INTO doctors(name, specialty, icon) VALUES (?, ?, ?)
        RETURNING id_doctor, name
    `

    const doctor = await query(sqlQuery, doctorData)

    return doctor
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
    
    return {id_doctor}
}

export default {
    getDoctors,
    insertDoctor,
    updateDoctor,
    deleteDoctor
}