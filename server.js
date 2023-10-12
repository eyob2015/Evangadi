// server.js

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configure MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body; // Assuming the form fields are named 'name', 'email', and 'message'

  // Construct the SQL query
  const query = `INSERT INTO users (name, email, message) VALUES (?, ?, ?)`;
  const values = [name, email, message];

  // Execute the query
  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
