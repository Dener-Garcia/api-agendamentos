import { db } from "../database/sqlite.js"

async function getDoctors(){

    const query = `create table users (
    id_user INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);`

db.query(query)

    const doctors = [{id: 1, name: "dener", Speciality: "cardiologica"}]
    return doctors
}

export default {getDoctors}