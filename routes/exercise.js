const express = require('express');
const router = express.Router();
const app = express();

app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = app