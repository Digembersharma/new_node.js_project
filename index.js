const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page (with task list)
app.get('/', (req, res) => {
    fs.readdir(`./files`, function (err, files) {
        res.render('index', { files: files });
    });
});

// Route for handling form submission
app.post('/submit', (req, res) => {
    const { title, details } = req.body;
    
    // You can save the task data or handle it as needed
    // In this example, we're just redirecting to the /submit route

    // Redirect to submit page with task details
    res.render('submit', { title, details });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});// heare we can anderstand about it
