
![Circarl Logo](https://i.imgur.com/0RSzC9j.png)

<h3 align="center">Midterm-test</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

</div>

---

<p align="center"> Midterm Test for COMP229 - Web Application Development
    <br> 
</p>



## Project Setup

1. Clone the repository or download the project files.
2. Install the necessary dependencies by running in the project directory.
 ```
 npm install express mongoose
``` 
3. Set up your MongoDB database (locally or using MongoDB Atlas) and configure the connection URL in the project.

---

## Project Structure

The project follows a standard Node.js project structure. Here are the important files and directories:

- `app.js`: The main entry point of the application where the Express app is configured.
- `routes/students.js`: Defines the routes for handling CRUD operations on students.
- `models/student.js`: Defines the Mongoose schema and model for the Student entity.

---
## Steps Taken

1. **Set up the project**:
   - Created a new Node.js project.
   - Installed necessary dependencies (`express`, & `mongoose`).

2. **Model the Data**:
   - Defined a `Student` Mongoose model with properties: `name`, `age`, `major`, `createdDate`, and `updatedDate`.

3. **Create the Database Connection**:
   - Connected to a MongoDB database using Mongoose (locally or using MongoDB Atlas).

4. **Create CRUD Routes**:
   - Set up Express routes for CRUD operations on students:
     - [x] `GET /students`: Fetch all students.
     - [x] `GET /students/:id`: Fetch a single student by ID.
     - [x] `POST /students`: Add a new student.
     - [x] `PUT /students/:id`: Update a student by ID.
     - [x] `DELETE /students/:id`: Delete a student by ID.

5. **Implement Route Handlers**:
   - Implemented the logic for each route using `async/await` and `try/catch` for error handling.
   - GET routes return the requested student(s).
   - POST route adds a new student to the database and returns the created student data.
   - PUT route updates an existing student's data and returns the updated data.
   - DELETE route removes a student from the database and returns a confirmation message.

6. **Testing**:
   - Used tools like Postman to test all the routes and ensure they are working correctly. For Reference, see the screenshots below.

> the following screenshots are taken from Postman

*Getting student ID by their unique ID using the `GET` method*
![Circarl Logo](https://github.com/Circarl/Midterm-Test-COMP229/blob/main/Screenshots/Screenshot%202023-06-23%20003351.png?raw=true)

*Getting all the students name using the `GET` method*
![Circarl Logo](https://github.com/Circarl/Midterm-Test-COMP229/blob/main/Screenshots/Screenshot%202023-06-23%20003439.png?raw=true)

*Using `POST` method to add a student and generates its ID automatically*
![Circarl Logo](https://github.com/Circarl/Midterm-Test-COMP229/blob/main/Screenshots/Screenshot%202023-06-23%20003645.png?raw=true)

*Deleting the student's name by their ID using the `DELETE` method*
![Circarl Logo](https://github.com/Circarl/Midterm-Test-COMP229/blob/main/Screenshots/Screenshot%202023-06-23%20003724.png?raw=true)

*Updating the student's name by their ID using the `PUT` method*
![Circarl Logo](https://github.com/Circarl/Midterm-Test-COMP229/blob/main/Screenshots/Screenshot%202023-06-23%20003919.png?raw=true)

---
## Usage

1. Start the server by running `npm start` in the project directory.
2. Use a tool like Postman to test the API endpoints (`GET`, `POST`, `PUT`, `DELETE`) on `http://localhost:3000/students`.
3. Customize and enhance the functionality based on your requirements.
---

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@circarl](https://github.com/Circarl) - Carl Kevin Gasal 301242419-Summer2023

