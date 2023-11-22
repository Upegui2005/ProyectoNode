const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('../frontend/views/index')
})
router.get('/productos', (req, res) => {
    res.render('../frontend/views/productos')
})

module.exports = router