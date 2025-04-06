import serviceDoctors from '../services/service.doctors.js'

async function getDoctors(req, res){

    const doctors = await serviceDoctors.getDoctors()

    res.status(200).json(doctors)
}

export default {
    getDoctors
}