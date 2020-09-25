const express = require('express');
const router = express.Router();

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "./develop/public/stats.html"));
});

module.exports = router