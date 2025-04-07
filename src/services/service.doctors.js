import repositoriyDoctors from "../repositories/repository.doctors.js"

async function getDoctors(name) {

    const doctors = await repositoriyDoctors.getDoctors(name)

    return doctors
}

async function insertDoctor(name, specialty, icon) {
    const doctorData = [name, specialty, icon]

    const doctor = await repositoriyDoctors.insertDoctor(doctorData)

    return doctor
}

async function updateDoctor(id_doctor, name, specialty, icon) {

    const doctorData = [name, specialty, icon, id_doctor]

    const doctor = await repositoriyDoctors.updateDoctor(doctorData)

    return doctor
}

async function deleteDoctor(id_doctor) {

    const doctor = await repositoriyDoctors.deleteDoctor(id_doctor)

    return doctor
}

export default {
    getDoctors,
    insertDoctor,
    updateDoctor,
    deleteDoctor,
}