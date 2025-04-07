
const tables = [
    {
        query: ` create table if not exists users (
id_user INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR(100),
email VARCHAR(100),
password VARCHAR(100)

);`},

    {
        query: ` create table if not exists admins (
id_admin INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR(100),
email VARCHAR(100),
password VARCHAR(100)

);`},

    {
        query: ` create table if not exists doctors (
id_doctor INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR(1000),
specialty VARCHAR(50),
icon VARCHAR(10)

);`},

    {
        query: ` create table if not exists services (
id_services INTEGER PRIMARY KEY AUTOINCREMENT,
description VARCHAR(50)

);`},

    {
        query: ` create table if not exists doctors_services (
id_doctor_service INTEGER PRIMARY KEY AUTOINCREMENT,
id_doctor INTEGER,
id_service INTEGER,
price DECIMAL(9,2),

Foreign Key (id_doctor) REFERENCES doctors(id_doctor),
Foreign Key (id_service) REFERENCES services(id_services)

);`},

    {
        query: ` create table if not exists appointments (
id_appointment INTEGER PRIMARY KEY AUTOINCREMENT,
id_doctor INTEGER,
id_service INTEGER,
id_user INTEGER,
booking_date DATE,
booking_hour VARCHAR(5),

Foreign Key (id_doctor) REFERENCES doctors(id_doctor),
Foreign Key (id_service) REFERENCES service(id_service),
Foreign Key (id_user) REFERENCES users(id_user)
);`}
]

async function createTables() {
    for (let i = 0; i < tables.length; i++) {
        console.log("criando tabela", tables[i])
        const crateTable = tables[i].query
        await query(crateTable, [])
    }
}

export { tables }
