// const express = require('express');
// const app = express();

// app.use(express.json());

// app.post('/', (req, res) => {
//     const content = req.body.content;
//     if (content) {
//         res.send(content);
//     } else {
//         res.status(400).send('Content field is required');
//     }
// });

// if (require.main === module) {
//     const PORT = 3000;
//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//     });
// }

// module.exports = app