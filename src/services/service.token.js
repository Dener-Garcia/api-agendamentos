import jwt from 'jsonwebtoken'

const privateKey = "MinhaChave123"

function createToken(idUser) {

    const token = jwt.sign({ idUser }, privateKey, { expiresIn: "7 days" })

    return token
}


export default { createToken, privateKey }