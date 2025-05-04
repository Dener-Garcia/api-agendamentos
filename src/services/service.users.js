import repositoryUsers from "../repositories/repository.users.js"
import bcrypt from 'bcrypt'
import serviceToken from "./service.token.js"

async function getUser(email, password) {

    const user = await repositoryUsers.getUser(email, password)

    const checkPassword = await bcrypt.compare(password, user.password)

    if (user.length == 0 || !checkPassword) {
        return []
    } else {
        const token = serviceToken.createToken(user.id_user)
        user.token = token
        return user
    }
}

async function insertUser(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 10)
    const userData = [name, email, hashPassword]

    const user = await repositoryUsers.insertUser(userData)

    const token = serviceToken.createToken(user.id_user)
    user.token = token

    return user
}

async function getProfile(idUser) {
    const profile = await repositoryUsers.getProfile(idUser)
    return profile
}

async function getUserAdmin(email, password) {

    const user = await repositoryUsers.getUserAdmin(email, password)

    const checkPassword = await bcrypt.compare(password, user.password)

    if (user.length == 0 || !checkPassword) {
        return []
    } else {
        const token = serviceToken.createToken(user.id_user)
        user.token = token
        return user
    }
}

async function insertUserAdmin(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 10)
    const userData = [name, email, hashPassword]

    const user = await repositoryUsers.insertUserAdmin(userData)

    const token = serviceToken.createToken(user.id_user)
    user.token = token

    return user
}

export default {
    insertUser,
    getUser,
    getProfile,
    getUserAdmin,
    insertUserAdmin,
}