import repositoryUsers from "../repositories/repository.users"

async function insertUser(name, email, password) {
    
    const userData = [name, email, password]

    const user = await repositoryUsers.insertUser(userData)

    return user
}

export default{
    insertUser,
}