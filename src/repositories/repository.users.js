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

async function getProfile(userId) {
    let sqlQuery = `
        SELECT name, email 
        FROM users 
        WHERE id_user = ?
    `

    const profile = await query(sqlQuery, [userId])
    return profile[0]
}

async function getUserAdmin(email, password) {
    let sqlQuery = `
        SELECT * FROM admins
        WHERE email = ?
    `

    const user = await query(sqlQuery, [email])

    if (user.length === 0) {
        return []
    } else {
        return user[0]
    }

}

async function getAllUsers() {
    console.log("model all users")
    let sqlQuery = `
        SELECT id_user, name, email FROM users ORDER BY name
    `
    const users = await query(sqlQuery, [])

    return users
}

async function insertUserAdmin(userData) {

    let sqlQuery = `
    INSERT INTO admins(name, email, password) VALUES (?, ?, ?)
    RETURNING id_admin, name
`

    const user = await query(sqlQuery, userData)

    return user[0]
}

export default {
    insertUser,
    getUser,
    getProfile,
    getAllUsers,
    getUserAdmin,
    insertUserAdmin
}