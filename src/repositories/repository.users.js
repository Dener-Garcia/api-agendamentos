import { query } from "../database/sqlite.js"

async function getUser(email, password) {
    let sqlQuery = `
        SELECT * FROM users
        WHERE email = ?
    `

    const user = await query(sqlQuery, [email])

    if (user.length === 0) {
        return []
    } else {
        return user[0]
    }

}

async function insertUser(userData) {

    let sqlQuery = `
    INSERT INTO users(name, email, password) VALUES (?, ?, ?)
    RETURNING id_user, name
`

    const user = await query(sqlQuery, userData)

    return user[0]
}

export default {
    insertUser,
    getUser
}