import serviceUsers from "../services/service.users.js"

async function insertUser(req, res) {

    const {name, email, password} = req.body

const user = await serviceUsers.insertUser(name, email, password)
    res.status(201).json(user)
    
}

export default {
    insertUser,
}