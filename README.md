RUN npm install

I used ES6 Module here (package.json[type: "module"])
Make sure the type is "module" in package.json when you run nodemon app.js

nodemon app.js

# APIs

# REGISTER USER
@POST http://localhost:8000/register

Input in BODY -> JSON CONTENT

{
    "fname": "Mico",
    "lname": "Dioquino",
    "username": "admin",
    "email": "admin@gmail.com",
    "password": "admin"
}

# LOGIN USER

@POST http://localhost:8000/login

Input in BODY -> JSON CONTENT
{
    "username": "admin",
    "password": "admin"
}

# GET USERS
@GET http://localhost:8000/users

# GET SINGLE USER
@GET http://localhost:8000/users/:id

# CREATE NEW USER
@GET http://localhost:8000/users

Input in BODY -> JSON CONTENT

{
    "fname": "Mico",
    "lname": "Dioquino",
    "address": "calasiao",
    "contact": "09276106336",
    "postal": 2418,
    "username": "admin",
    "email": "admin@gmail.com",
    "password": "admin"
}

# UPDATE USER
@PUT http://localhost:8000/users/:id

Input in BODY -> JSON CONTENT

{
    "fname": "Mico",
    "lname": "Dioquino",
    "address": "calasiao",
    "contact": "09276106336",
    "postal": 2418,
    "username": "admin",
    "email": "admin@gmail.com",
    "password": "admin"
}

# DELETE USER
@DELETE http://localhost:8000/users/:id

# DELETE MULTIPLE USER
@POST http://localhost:8000/users/delete

Input in BODY -> JSON CONTENT

{
    "ids": [1,2,3],
}

# MIGRATIONS AND SEEDERS
I used commonjs here (package.json[type: "commonjs"])
change type into "commonjs" to run migration and seeder

# INSTALLED
npm install -g sequelize-cli
sequelize init
npm install --save github:scimonster/sequelize-auto-migrations#a063aa6535a3f580623581bf866cef2d609531ba

npm run db:makemigrations

# CREATE TABLE
sequelize model:generate --name User --attributes fname:string, lname:string, address:string, postal:integer, contact:string, email:string, username:string, password:string

# RUN DB MIGRATE
sequelize db:migrate

# SEEDERS
npx sequelize seed:generate --name user
npx sequelize db:seed:all