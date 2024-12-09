/**
 * Express application for handling POST and GET requests.
 * 
 * This server provides the following endpoints:
 * 1. POST / - Accepts a JSON body and responds with the content field if provided.
 * 2. GET / - Responds with a welcome message and usage instructions.
 */

const express = require('express');
const app = express();

app.use(express.json());

/**
 * POST endpoint at the root ('/').
 * 
 * Extracts the "content" field from the JSON body and responds with its value.
 * If the "content" field is missing, it returns a 400 status with an error message.
 *
 * @name POST/
 * @function
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
app
app.post('/', (req, res) => {
    const content = req.body.content;
    if (content) {
        res.send(content);
    } else {
        res.status(400).send('Content field is required');
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to the server! Use POST to send content.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app