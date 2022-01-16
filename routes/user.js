const userRoutes = require('express').Router();
const user = require('../controllers/userController')

userRoutes.get('/api/users', user.getAll);

module.exports = userRoutes;