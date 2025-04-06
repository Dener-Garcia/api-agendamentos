create table users (
    id_user INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);

create table admins (
    id_admin INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
)

create table doctors (
    id_doctor INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(1000),
    specialty VARCHAR(50),
    icon VARCHAR(10)
)

create table services (
    id_services INTEGER PRIMARY KEY AUTOINCREMENT,
    description VARCHAR(50)
)

create table doctors_services (
    id_doctor_service INTEGER PRIMARY KEY AUTOINCREMENT,
    id_doctor INTEGER,
    id_service INTEGER,
    price DECIMAL(9,2),

    Foreign Key (id_doctor) REFERENCES doctors(id_doctor),
    Foreign Key (id_service) REFERENCES services(id_services)
)

create table appointments (
    id_appointment INTEGER PRIMARY KEY AUTOINCREMENT,
    id_doctor INTEGER,
    id_service INTEGER,
    id_user INTEGER,
    booking_date DATE,
    booking_hour VARCHAR(5),

    Foreign Key (id_doctor) REFERENCES doctors(id_doctor),
    Foreign Key (id_service) REFERENCES service(id_service),
    Foreign Key (id_user) REFERENCES users(id_user)

)

