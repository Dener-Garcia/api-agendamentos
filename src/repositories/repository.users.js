import { query } from "../database/sqlite"

async function insertUser(userData) {

    let sqlQuery = `
    INSERT INTO users(name, specialty, icon) VALUES (?, ?, ?)
    RETURNING id_doctor, name
`
    
    const user = query(sqlQuery, userData)

    return user
}

export default{
    insertUser
}