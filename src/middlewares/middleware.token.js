import jwt from 'jsonwebtoken'
import serviceToken from '../services/service.token.js'

function validateToken(req, res, next) {
    const authToken = req.headers.authorization // "Bearer tokenString"
    console.log(authToken)
    if (!authToken) {
        return res.status(403).json({ error: "Token ausente" })
    }

    // extract token with destruct array bearer = bearer, token = token string
    const [bearer, token] = authToken.split(" ")

    jwt.verify(token, serviceToken.privateKey, (error, decodedToken) => {
        if (error) {
            return res.status(401).json({ error: "Token invalido" })
        }

        // passando o idUser para o req do controller

        req.idUser = decodedToken.idUser

        next()
    })

}

export default {
    validateToken
}