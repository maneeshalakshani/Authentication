const express = require('express')
const router = express.Router();

const {
    test,
    login,
    register,
} = require('../../controllers/auth/authController');

router.get('/test', test);
router.post('/login', login)
router.post('/register', register)

module.exports = router;