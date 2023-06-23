const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentsRouter = require('./routes/students');  // Load routes

const port = 3000;

const app = express();                      // Create express app object

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());  
app.use(express.json());
app.use('/students', studentsRouter);      // Parse JSON from the request body


//MongoDB connection
const dbConfig = require('./config/database.config.js'); // Load database configuration

mongoose.connect(dbConfig.url, { // Connect to the database
    useNewUrlParser: true, // Parse URL string

}).then(() => {console.log("Database Connection Successful"); // If connection successful
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
});

// Get the default connection
app.get('/', (req, res) => {
    res.send('Server is running and working');
  });
  
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
