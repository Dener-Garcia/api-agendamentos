import repositoryUsers from "../repositories/repository.users.js"
import bcrypt from 'bcrypt'

async function getUser(email, password) {

    const user = await repositoryUsers.getUser(email, password)

    const checkPassword = await bcrypt.compare(password, user.password)

    if (user.length == 0 || !checkPassword) {
        return []
    } else {
        user.token = "abc"
        return user
    }
}

async function insertUser(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 10)

    const userData = [name, email, hashPassword]

    const user = await repositoryUsers.insertUser(userData)

    user.token = "abc1"

    return user
}

export default {
    insertUser,
    getUser
}