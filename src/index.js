import express from 'express'
import cors from 'cors'
import router from './routes.js'

const app = express()

app.use(cors())

app.use(router)


app.listen(3003, () => {console.log("running at port 3004")})