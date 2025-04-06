import repositoriyDoctors from "../repositories/repository.doctors.js"

async function getDoctors(){
    
    const doctors = await repositoriyDoctors.getDoctors()

    return doctors
}

export default {
    getDoctors
}