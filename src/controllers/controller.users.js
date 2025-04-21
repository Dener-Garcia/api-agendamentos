import serviceUsers from "../services/service.users.js"

async function getUser(req, res) {
    // em rotas login usamos POST para ter segurança do HTTPS ao enviar a requisição com a senha pelo body e não pela Url como fazemos com metodos GET.

    const { email, password } = req.body

    console.log(email, password)

    const user = await serviceUsers.getUser(email, password)

    if (user.length == 0) {
        res.status(401).json({ Message: "Usuário ou senha incorretos" })
    } else {
        res.status(200).json({
            id: user.id_user,
            user: user.name,
            userMail: user.email,
            token: user.token
        })
    }

}

async function insertUser(req, res) {

    const { name, email, password } = req.body

    const user = await serviceUsers.insertUser(name, email, password)
    res.status(201).json(user)

}

async function getProfile(req, res) {
    const { idUser } = req

    const profile = await serviceUsers.getProfile(idUser)
    res.status(200).json(profile)
}

export default {
    insertUser,
    getUser,
    getProfile
}