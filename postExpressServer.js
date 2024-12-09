const express = require('express');
const app = express();

app.use(express.json());

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